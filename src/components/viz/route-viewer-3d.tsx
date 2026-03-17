'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import type { ColorChannel } from './route-scene'

const RouteScene = dynamic(() => import('./route-scene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-gray-500 text-sm">
      Loading 3D view…
    </div>
  ),
})

const CHANNELS: { key: ColorChannel; label: string; unit: string }[] = [
  { key: 'u',     label: 'Speed', unit: 'm/s' },
  { key: 'Power', label: 'Power', unit: 'W'   },
]

const MODEL_URL  = '/data/canyon_Inflite_full.glb'
const PLAY_SPEED = 1 / 30   // full route in ~30 s
const INIT_PROG  = 0.46

interface RouteViewer3DProps {
  dataUrl: string
  height?: number
}

export function RouteViewer3D({ dataUrl, height = 540 }: RouteViewer3DProps) {
  const [channel,   setChannel]   = useState<ColorChannel | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // progressRef drives Three.js — never causes re-renders
  const progressRef = useRef(INIT_PROG)

  // DOM refs for slider + label — updated directly, no React re-renders
  const sliderRef   = useRef<HTMLInputElement>(null)
  const pctRef      = useRef<HTMLSpanElement>(null)

  const rafRef      = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  // Keep slider background gradient in sync via direct DOM
  const syncSliderDOM = (val: number) => {
    const pct = val * 100
    if (sliderRef.current) {
      sliderRef.current.value = String(pct)
      sliderRef.current.style.background =
        `linear-gradient(to right, #00dc82 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`
    }
    if (pctRef.current) pctRef.current.textContent = `${Math.round(pct)}%`
  }

  // Playback loop — zero React re-renders per frame
  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(rafRef.current)
      return
    }
    lastTimeRef.current = performance.now()
    const tick = (now: number) => {
      const dt   = (now - lastTimeRef.current) / 1000
      lastTimeRef.current = now
      const next = Math.min(1, progressRef.current + PLAY_SPEED * dt)
      progressRef.current = next
      syncSliderDOM(next)
      if (next < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setIsPlaying(false)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPlaying])

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value) / 100
    progressRef.current = val
    syncSliderDOM(val)
  }

  const handleChannel = (key: ColorChannel) => {
    setChannel(prev => prev === key ? null : key)
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-black/10 bg-[#e8e4df]">

      {/* ── Toolbar ──────────────────────────────────────────── */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/10 bg-[#dedad4]">
        <span className="text-xs text-gray-600 shrink-0">Show</span>
        {CHANNELS.map(c => (
          <button
            key={c.key}
            onClick={() => handleChannel(c.key)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
              channel === c.key
                ? 'bg-gray-800 text-white'
                : 'bg-black/10 text-gray-600 hover:bg-black/20 hover:text-gray-900'
            }`}
          >
            {c.label}
            <span className="ml-1 opacity-40 font-normal">{c.unit}</span>
          </button>
        ))}

        {channel !== null && (
          <div className="ml-auto flex items-center gap-2 shrink-0 text-xs text-gray-500">
            {channel === 'Power' ? (
              <>
                <span className="inline-block w-3 h-3 rounded-sm" style={{ background: '#ff3333', opacity: 0.7 }} />
                <span>braking</span>
                <span className="inline-block w-3 h-3 rounded-sm ml-2" style={{ background: '#3366ff', opacity: 0.7 }} />
                <span>propulsion</span>
              </>
            ) : (
              <>
                <span className="inline-block w-3 h-3 rounded-sm" style={{ background: '#3366ff', opacity: 0.7 }} />
                <span>speed</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* ── Three.js canvas ──────────────────────────────────── */}
      <div style={{ height }}>
        <RouteScene
          key={channel ?? 'none'}
          dataUrl={dataUrl}
          channel={channel}
          progressRef={progressRef}
          modelUrl={MODEL_URL}
        />
      </div>

      {/* ── Progress slider ───────────────────────────────────── */}
      <div className="px-4 py-3 border-t border-black/10 bg-[#dedad4]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(p => !p)}
            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                <rect x="0" y="0" width="3" height="12" rx="1"/>
                <rect x="7" y="0" width="3" height="12" rx="1"/>
              </svg>
            ) : (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                <path d="M0 0 L10 6 L0 12 Z"/>
              </svg>
            )}
          </button>
          <span className="text-xs text-gray-600 shrink-0">
            Route cursor
            <span className="ml-1.5 opacity-40 font-normal">3× speed</span>
          </span>
          <div className="relative flex-1">
            <input
              ref={sliderRef}
              type="range"
              min={0}
              max={100}
              step={0.1}
              defaultValue={INIT_PROG * 100}
              onChange={handleProgress}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00dc82 ${INIT_PROG * 100}%, rgba(255,255,255,0.1) ${INIT_PROG * 100}%)`,
              }}
            />
          </div>
          <span ref={pctRef} className="text-xs tabular-nums text-gray-700 shrink-0 w-10 text-right">
            {Math.round(INIT_PROG * 100)}%
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1.5 text-center">
          Drag to rotate · Scroll to zoom · Right-click to pan
          <span className="mx-2 opacity-30">|</span>
          1:1:1 scale
        </p>
      </div>
    </div>
  )
}
