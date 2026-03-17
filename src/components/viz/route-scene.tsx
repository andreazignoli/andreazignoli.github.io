'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'

export type ColorChannel = 'u' | 'Power'

interface RoutePoint {
  zeta: number; kappa: number; n: number; alpha: number
  u: number; Power: number; ax: number; ay: number
  xCoM: number; yCoM: number
  xLane: number; yLane: number
  xLeftEdge: number; yLeftEdge: number
  xRightEdge: number; yRightEdge: number
  slope: number; time: number; phi: number; z: number
}

const V_SCALE     = 1
const Z_LIFT      = 0.05
const BAR_MAX     = 8
const ACCEL_SCALE = 3      // shorter arrows
const MINIMAP_PX  = 240
const GG_PX       = 240
const GG_SCALE_G  = 1.5

// Initial camera pose (world-space, from debug readout)
const INIT_CAM_POS = new THREE.Vector3(-24.1, 99.1, -97.9)
const INIT_CAM_TGT = new THREE.Vector3(-4.9,  71.0, -47.6)

function toWorld(x: number, y: number, elev: number, minZ: number, lift = 0): THREE.Vector3 {
  return new THREE.Vector3(x, (elev - minZ) * V_SCALE + lift, y)
}

function buildBarMesh(
  data: RoutePoint[], values: number[], sign: 1 | -1, minZ: number, color: string,
): THREE.Mesh {
  const N = data.length
  let maxAbs = 0
  for (const v of values) if (Math.abs(v) > maxAbs) maxAbs = Math.abs(v)
  const scale = maxAbs > 0 ? BAR_MAX / maxAbs : 1

  const positions: number[] = []
  const indices:   number[] = []
  for (let i = 0; i < N; i++) {
    const p  = data[i]
    const bv = toWorld(p.xCoM, p.yCoM, p.z, minZ, Z_LIFT)
    const h  = Math.max(0, sign === 1 ? values[i] : -values[i]) * scale
    positions.push(bv.x, bv.y,     bv.z)
    positions.push(bv.x, bv.y + h, bv.z)
    if (i < N - 1) {
      const a = i*2, b = a+1, c = a+2, d = a+3
      indices.push(a, b, c, b, d, c)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    color, side: THREE.DoubleSide, transparent: true, opacity: 0.6, roughness: 0.8,
  }))
}

function buildEdgeCurtain(
  data: RoutePoint[],
  getX: (p: RoutePoint) => number,
  getY: (p: RoutePoint) => number,
  minZ: number,
): THREE.Mesh {
  const N = data.length
  const positions: number[] = []
  const indices:   number[] = []
  for (let i = 0; i < N; i++) {
    const p  = data[i]
    const tv = toWorld(getX(p), getY(p), p.z, minZ)
    positions.push(tv.x, tv.y, tv.z)
    positions.push(tv.x, 0,    tv.z)
    if (i < N - 1) {
      const a = i*2, b = a+1, c = a+2, d = a+3
      indices.push(a, c, b, b, c, d)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    color: '#d4d4d4', side: THREE.DoubleSide, roughness: 1,
  }))
}

// Pure uniform cylinder — fixed radius, only length (Y) scales.
// Equal top/bottom radii = no taper = no false "two-object" appearance.
const ARROW_RADIUS = 0.12   // metres; never changes
function buildMeshArrow(color: number): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(ARROW_RADIUS, ARROW_RADIUS, 1, 14)
  geo.translate(0, 0.5, 0)   // base at local y=0
  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color }))
}

const _UP = new THREE.Vector3(0, 1, 0)

function updateMeshArrow(arrow: THREE.Mesh, dir: THREE.Vector3, len: number) {
  if (len < 0.05) { arrow.visible = false; return }
  arrow.visible = true
  arrow.quaternion.setFromUnitVectors(_UP, dir)
  // Only scale Y (length) — X/Z stay at 1 so radius is always ARROW_RADIUS
  arrow.scale.set(1, len, 1)
}

export default function RouteScene({
  dataUrl, channel, progressRef, modelUrl,
}: {
  dataUrl: string
  channel: ColorChannel | null
  progressRef: React.MutableRefObject<number>
  modelUrl?: string
}) {
  const mountRef   = useRef<HTMLDivElement>(null)
  const minimapRef = useRef<HTMLCanvasElement>(null)
  const ggRef      = useRef<HTMLCanvasElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setClearColor('#e8e4df')
    el.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 50000)
    scene.add(new THREE.AmbientLight('#ffffff', 0.7))
    const sun = new THREE.DirectionalLight('#ffffff', 0.8)
    sun.position.set(200, 500, 200)
    scene.add(sun)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.minDistance   = 1
    controls.maxDistance   = 20000
    controls.maxPolarAngle = Math.PI / 2

    let animId: number
    let disposed = false
    let prevTrajMats: LineMaterial[] = []

    fetch(dataUrl)
      .then(r => r.json())
      .then((data: RoutePoint[]) => {
        if (disposed) return
        const N = data.length

        let minZ = Infinity
        for (const p of data) if (p.z < minZ) minZ = p.z

        let sx = 0, sy = 0
        for (const p of data) { sx += p.xCoM; sy += p.yCoM }
        const cx = sx / N, cy = sy / N

        const group = new THREE.Group()
        group.position.set(-cx, 0, -cy)

        // ── Road ribbon ──────────────────────────────────────────
        {
          const positions: number[] = []
          const indices:   number[] = []
          for (let i = 0; i < N; i++) {
            const p  = data[i]
            const lv = toWorld(p.xLeftEdge,  p.yLeftEdge,  p.z, minZ)
            const rv = toWorld(p.xRightEdge, p.yRightEdge, p.z, minZ)
            positions.push(lv.x, lv.y, lv.z,  rv.x, rv.y, rv.z)
            if (i < N - 1) {
              const a = i*2, b = a+1, c = a+2, d = a+3
              indices.push(a, b, c, b, d, c)
            }
          }
          const geo = new THREE.BufferGeometry()
          geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
          geo.setIndex(indices)
          geo.computeVertexNormals()
          group.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
            color: '#666666', side: THREE.DoubleSide, roughness: 0.8,
          })))
        }

        // ── Road edge lines ──────────────────────────────────────
        for (const side of ['left', 'right'] as const) {
          const positions: number[] = []
          for (const p of data) {
            const v = toWorld(
              side === 'left' ? p.xLeftEdge : p.xRightEdge,
              side === 'left' ? p.yLeftEdge : p.yRightEdge,
              p.z, minZ,
            )
            positions.push(v.x, v.y, v.z)
          }
          const geo = new THREE.BufferGeometry()
          geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
          group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#222222' })))
        }

        // ── Left edge curtain ────────────────────────────────────
        group.add(buildEdgeCurtain(data, p => p.xLeftEdge,  p => p.yLeftEdge,  minZ))

        // ── Right edge curtain ───────────────────────────────────
        group.add(buildEdgeCurtain(data, p => p.xRightEdge, p => p.yRightEdge, minZ))

        // ── Dashed centre-lane line ──────────────────────────────
        {
          const positions: number[] = []
          for (const p of data) {
            const v = toWorld(p.xLane, p.yLane, p.z, minZ, 0.1)
            positions.push(v.x, v.y, v.z)
          }
          const geo = new THREE.BufferGeometry()
          geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
          const laneLine = new THREE.Line(geo, new THREE.LineDashedMaterial({
            color: '#ffffff', dashSize: 3, gapSize: 2,
          }))
          laneLine.computeLineDistances()
          group.add(laneLine)
        }

        // ── Dynamic trajectory segments (built each frame) ───────
        // Previous 200 pts: 10 Line2 segments with exponential alpha fade
        const N_TRAIL   = 10
        const PREV_POINTS = 200
        const prevTrajGeos:  LineGeometry[] = []
        const prevTrajLines: Line2[]        = []
        for (let i = 0; i < N_TRAIL; i++) {
          const alpha = Math.pow((i + 1) / N_TRAIL, 1.8)
          const geo = new LineGeometry()
          const mat = new LineMaterial({
            color: 0xcc1111, linewidth: 3,
            transparent: true, opacity: alpha, depthWrite: false,
            resolution: new THREE.Vector2(el.clientWidth, el.clientHeight),
          })
          const line = new Line2(geo, mat)
          prevTrajMats.push(mat)
          prevTrajGeos.push(geo)
          prevTrajLines.push(line)
          group.add(line)
        }

        // Next 100 pts: thin dark Line (pre-allocated, updated in-place)
        const NEXT_BUF = 102
        const nextTrajPos = new Float32Array(NEXT_BUF * 3)
        const nextTrajGeo = new THREE.BufferGeometry()
        nextTrajGeo.setAttribute('position', new THREE.BufferAttribute(nextTrajPos, 3))
        const nextTrajLine = new THREE.Line(nextTrajGeo, new THREE.LineBasicMaterial({ color: '#111111' }))
        group.add(nextTrajLine)

        // ── Channel bar meshes ────────────────────────────────────
        if (channel !== null) {
          const vals = data.map(p => p[channel])
          if (channel === 'Power') {
            group.add(buildBarMesh(data, vals,  1, minZ, '#2255ee'))
            group.add(buildBarMesh(data, vals, -1, minZ, '#ee2233'))
          } else {
            group.add(buildBarMesh(data, vals, 1, minZ, '#2255ee'))
          }
        }

        // ── Cyclist marker ───────────────────────────────────────
        const cyclistGroup = new THREE.Group()
        // Halo always visible for position readability
        cyclistGroup.add(new THREE.Mesh(
          new THREE.SphereGeometry(2.0, 24, 24),
          new THREE.MeshBasicMaterial({ color: '#cc1111', transparent: true, opacity: 0.18, side: THREE.FrontSide }),
        ))
        // Sphere fallback (shown until/unless GLB loads)
        const fallbackSphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.8, 16, 16),
          new THREE.MeshStandardMaterial({ color: '#cc1111', roughness: 0.5 }),
        )
        cyclistGroup.add(fallbackSphere)
        group.add(cyclistGroup)

        // Load GLB model if provided
        let bikeLoaded = false
        if (modelUrl) {
          new GLTFLoader().load(modelUrl, (gltf) => {
            if (disposed) return
            const bike = gltf.scene
            // Scale from mm → m
            bike.scale.setScalar(1 / 1000)
            // Centre and lift so wheels sit at road level
            const box = new THREE.Box3().setFromObject(bike)
            const centre = box.getCenter(new THREE.Vector3())
            bike.position.x -= centre.x
            bike.position.z -= centre.z
            bike.position.y -= box.min.y   // wheels at y = 0
            cyclistGroup.add(bike)
            cyclistGroup.remove(fallbackSphere)
            bikeLoaded = true
          })
        }

        // ── Acceleration arrows (solid mesh, no line aliasing) ───
        const arrowAy = buildMeshArrow(0xff8800)
        const arrowAx = buildMeshArrow(0x00ccff)
        group.add(arrowAy)
        group.add(arrowAx)

        scene.add(group)

        // ── Minimap ───────────────────────────────────────────────
        const miniCanvas = minimapRef.current
        let offMap: HTMLCanvasElement | null = null
        let toMapX = (_x: number) => 0
        let toMapY = (_y: number) => 0

        if (miniCanvas) {
          miniCanvas.width  = MINIMAP_PX
          miniCanvas.height = MINIMAP_PX

          let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity
          for (const p of data) {
            const x = p.xCoM - cx, y = p.yCoM - cy
            if (x < xMin) xMin = x; if (x > xMax) xMax = x
            if (y < yMin) yMin = y; if (y > yMax) yMax = y
          }
          const PAD   = 14
          const range = Math.max(xMax - xMin, yMax - yMin)
          const ms    = (MINIMAP_PX - 2 * PAD) / range
          const mox   = PAD + ((MINIMAP_PX - 2*PAD) - (xMax - xMin) * ms) / 2 - xMin * ms
          const moy   = PAD + ((MINIMAP_PX - 2*PAD) - (yMax - yMin) * ms) / 2 - yMin * ms

          toMapX = (x: number) => mox + x * ms
          toMapY = (y: number) => MINIMAP_PX - (moy + y * ms)

          offMap = document.createElement('canvas')
          offMap.width  = MINIMAP_PX
          offMap.height = MINIMAP_PX
          const offCtx = offMap.getContext('2d')!
          offCtx.beginPath()
          for (let i = 0; i < N; i++) {
            const mx = toMapX(data[i].xCoM - cx)
            const my = toMapY(data[i].yCoM - cy)
            i === 0 ? offCtx.moveTo(mx, my) : offCtx.lineTo(mx, my)
          }
          offCtx.strokeStyle = '#111111'
          offCtx.lineWidth   = 1.5
          offCtx.stroke()
        }

        // ── G-G: precompute ax/ay in g-units ─────────────────────
        const G      = 9.81
        const allAxG = data.map(p => p.ax / G)   // lateral
        const allAyG = data.map(p => p.ay / G)   // longitudinal
        const ggCanvas = ggRef.current
        if (ggCanvas) {
          ggCanvas.width  = GG_PX
          ggCanvas.height = GG_PX
        }
        const GG_PAD  = 22
        const ggR     = (GG_PX / 2) - GG_PAD
        const ggScale = ggR / GG_SCALE_G

        // ── Initial camera pose ───────────────────────────────────
        camera.position.copy(INIT_CAM_POS)
        controls.target.copy(INIT_CAM_TGT)
        controls.update()

        const lerpTarget  = new THREE.Vector3()
        const worldCursor = new THREE.Vector3()
        let prevProgress  = -1

        // ── Render loop ───────────────────────────────────────────
        const animate = () => {
          animId = requestAnimationFrame(animate)

          const progress = progressRef.current
          const idx = Math.round(progress * (N - 1))
          const p   = data[idx]
          const cv  = toWorld(p.xCoM, p.yCoM, p.z, minZ, Z_LIFT)
          cyclistGroup.position.copy(cv)

          // ── Dynamic trajectory update ─────────────────────────
          // Red trail: 10 segments with exponential alpha fade
          const prevStart  = Math.max(0, idx - PREV_POINTS)
          const totalPrev  = idx - prevStart + 1
          for (let s = 0; s < N_TRAIL; s++) {
            const sStart = prevStart + Math.floor(s * totalPrev / N_TRAIL)
            const sEnd   = prevStart + Math.min(Math.floor((s + 1) * totalPrev / N_TRAIL), totalPrev - 1)
            const count  = sEnd - sStart + 1
            if (count >= 2) {
              const buf = new Float32Array(count * 3)
              for (let i = 0; i < count; i++) {
                const v = toWorld(data[sStart + i].xCoM, data[sStart + i].yCoM, data[sStart + i].z, minZ, Z_LIFT)
                buf[i * 3] = v.x; buf[i * 3 + 1] = v.y; buf[i * 3 + 2] = v.z
              }
              prevTrajGeos[s].setPositions(buf)
              prevTrajLines[s].visible = true
            } else {
              prevTrajLines[s].visible = false
            }
          }

          // Black: next 100 points
          const nextEnd   = Math.min(N - 1, idx + 100)
          const nextCount = nextEnd - idx + 1
          for (let i = 0; i < nextCount; i++) {
            const v = toWorld(data[idx + i].xCoM, data[idx + i].yCoM, data[idx + i].z, minZ, Z_LIFT)
            nextTrajPos[i * 3] = v.x; nextTrajPos[i * 3 + 1] = v.y; nextTrajPos[i * 3 + 2] = v.z
          }
          nextTrajGeo.attributes.position.needsUpdate = true
          nextTrajGeo.setDrawRange(0, nextCount)

          // Tangent directions
          const iPrev = Math.max(idx - 3, 0)
          const iNext = Math.min(idx + 3, N - 1)
          const vPrev = toWorld(data[iPrev].xCoM, data[iPrev].yCoM, data[iPrev].z, minZ, Z_LIFT)
          const vNext = toWorld(data[iNext].xCoM, data[iNext].yCoM, data[iNext].z, minZ, Z_LIFT)
          const forward = vNext.clone().sub(vPrev).normalize()
          const lateral = forward.clone().cross(new THREE.Vector3(0, 1, 0)).normalize()

          // Rotate bike: yaw to face forward, then roll by phi around forward axis
          if (bikeLoaded) {
            const forwardXZ = new THREE.Vector3(forward.x, 0, forward.z).normalize()
            if (forwardXZ.lengthSq() > 0.001) {
              const qYaw  = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), forwardXZ)
              const qRoll = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -p.phi)
              cyclistGroup.quaternion.copy(qYaw).multiply(qRoll)
            }
          }

          // Longitudinal arrow (orange) — p.ax
          const ayVal = p.ax
          const ayLen = Math.abs(ayVal) * ACCEL_SCALE
          arrowAy.position.copy(cv)
          updateMeshArrow(arrowAy, ayVal >= 0 ? forward : forward.clone().negate(), ayLen)

          // Lateral arrow (cyan) — p.ay scaled by 0.5 (lateral ~2× larger than longitudinal)
          const axVal = p.ay
          const axLen = Math.abs(axVal) * ACCEL_SCALE * 0.5
          arrowAx.position.copy(cv)
          updateMeshArrow(arrowAx, axVal >= 0 ? lateral : lateral.clone().negate(), axLen)

          // Camera pan
          if (Math.abs(progress - prevProgress) > 0.001) {
            cyclistGroup.getWorldPosition(worldCursor)
            lerpTarget.copy(worldCursor)
            prevProgress = progress
          }
          if (lerpTarget.lengthSq() > 0)
            controls.target.lerp(lerpTarget, 0.08)

          controls.update()
          renderer.render(scene, camera)

          // ── Speed / power overlay ─────────────────────────────
          const statsEl = statsRef.current
          if (statsEl) {
            const speedKmh = (p.u * 3.6).toFixed(1)
            const powerW   = Math.round(p.Power)
            const braking  = p.Power < 0
            statsEl.innerHTML =
              `<span style="opacity:0.6;font-size:10px">Speed</span>&nbsp;` +
              `<strong>${speedKmh}&nbsp;km/h</strong>` +
              `&ensp;` +
              `<span style="opacity:0.6;font-size:10px">Power</span>&nbsp;` +
              `<strong style="color:${braking ? '#ff4444' : '#4488ff'}">${powerW}&nbsp;W</strong>`
          }

          // ── Minimap draw ──────────────────────────────────────
          if (miniCanvas && offMap) {
            const mc = miniCanvas.getContext('2d')!
            const W  = MINIMAP_PX
            mc.clearRect(0, 0, W, W)
            mc.save()
            mc.beginPath()
            mc.arc(W / 2, W / 2, W / 2 - 1, 0, Math.PI * 2)
            mc.fillStyle = 'rgba(255,255,255,0.93)'
            mc.fill()
            mc.clip()
            mc.drawImage(offMap, 0, 0)
            const mx = toMapX(data[idx].xCoM - cx)
            const my = toMapY(data[idx].yCoM - cy)
            mc.beginPath()
            mc.arc(mx, my, 5, 0, Math.PI * 2)
            mc.fillStyle = '#cc1111'
            mc.fill()
            mc.restore()
            mc.beginPath()
            mc.arc(W / 2, W / 2, W / 2 - 1.5, 0, Math.PI * 2)
            mc.strokeStyle = '#333333'
            mc.lineWidth = 3
            mc.stroke()
          }

          // ── G-G diagram draw ──────────────────────────────────
          if (ggCanvas) {
            const gc  = ggCanvas.getContext('2d')!
            const W   = GG_PX
            const cx2 = W / 2
            const cy2 = W / 2
            gc.clearRect(0, 0, W, W)
            gc.save()
            gc.beginPath()
            gc.arc(cx2, cy2, W / 2 - 1, 0, Math.PI * 2)
            gc.fillStyle = 'rgba(255,255,255,0.93)'
            gc.fill()
            gc.clip()

            // axes
            gc.beginPath()
            gc.moveTo(cx2, GG_PAD); gc.lineTo(cx2, W - GG_PAD)
            gc.moveTo(GG_PAD, cy2); gc.lineTo(W - GG_PAD, cy2)
            gc.strokeStyle = '#cccccc'
            gc.lineWidth = 1
            gc.stroke()

            // gray rings at 0.5, 1.0, 1.25 g
            gc.setLineDash([3, 3])
            for (const gr of [0.5, 1.0, 1.25]) {
              const r = gr * ggScale
              gc.beginPath()
              gc.arc(cx2, cy2, r, 0, Math.PI * 2)
              gc.strokeStyle = '#bbbbbb'
              gc.lineWidth = 1
              gc.stroke()
              gc.fillStyle = '#aaaaaa'
              gc.font = '9px sans-serif'
              gc.textAlign = 'left'
              gc.fillText(`${gr}g`, cx2 + r + 2, cy2 - 2)
            }
            gc.setLineDash([])

            // all points — lateral on Y, longitudinal on X
            gc.fillStyle = 'rgba(120, 170, 255, 0.15)'
            for (let i = 0; i < N; i++) {
              const gx = allAyG[i] * ggScale   // longitudinal → X
              const gy = allAxG[i] * ggScale   // lateral → Y
              gc.beginPath()
              gc.arc(cx2 + gx, cy2 - gy, 1.8, 0, Math.PI * 2)
              gc.fill()
            }

            // current point
            const curGx = allAyG[idx] * ggScale
            const curGy = allAxG[idx] * ggScale
            gc.beginPath()
            gc.arc(cx2 + curGx, cy2 - curGy, 5, 0, Math.PI * 2)
            gc.fillStyle = '#cc1111'
            gc.fill()

            gc.restore()
            // border
            gc.beginPath()
            gc.arc(cx2, cy2, W / 2 - 1.5, 0, Math.PI * 2)
            gc.strokeStyle = '#333333'
            gc.lineWidth = 3
            gc.stroke()
            // title (outside clip, slightly lower)
            gc.fillStyle = '#333333'
            gc.font = 'bold 11px sans-serif'
            gc.textAlign = 'center'
            gc.fillText('g-g diagram', cx2, 17)
          }
        }
        animate()
      })
      .catch(err => console.error('RouteScene fetch error:', err))

    const onResize = () => {
      if (!el) return
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    const onResizeLineMat = () => {
      if (!el) return
      prevTrajMats.forEach(m => m.resolution.set(el.clientWidth, el.clientHeight))
    }
    window.addEventListener('resize', onResizeLineMat)
    window.addEventListener('resize', onResize)

    return () => {
      disposed = true
      cancelAnimationFrame(animId)
      controls.dispose()
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('resize', onResizeLineMat)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUrl])

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* G-G diagram — top left */}
      <canvas
        ref={ggRef}
        style={{
          position: 'absolute', top: 12, left: 12,
          width: 160, height: 160,
          borderRadius: '50%', zIndex: 10, pointerEvents: 'none',
        }}
      />
      {/* Route minimap — top right */}
      <canvas
        ref={minimapRef}
        style={{
          position: 'absolute', top: 12, right: 12,
          width: 160, height: 160,
          borderRadius: '50%', zIndex: 10, pointerEvents: 'none',
        }}
      />
      {/* Speed / power readout — bottom center */}
      <div
        ref={statsRef}
        style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.45)', color: '#ffffff',
          font: '13px/1 monospace', padding: '6px 14px',
          borderRadius: 8, zIndex: 10, pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  )
}
