'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export const BackgroundRippleEffect = ({
  rows: initialRows = 18,
  cols: initialCols = 27,
  cellSize = 56,
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [grid, setGrid] = useState({ rows: initialRows, cols: initialCols })
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(null)
  const [rippleKey, setRippleKey] = useState(0)

  // Size the grid to its container so it always spans the full width, however wide the screen
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      const cols = Math.ceil(width / cellSize) + 1
      const rows = Math.ceil(height / cellSize) + 1
      setGrid((g) => (g.cols === cols && g.rows === rows ? g : { rows, cols }))
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [cellSize])

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full overflow-hidden">
      <DivGrid
        key={rippleKey}
        rows={grid.rows}
        cols={grid.cols}
        cellSize={cellSize}
        clickedCell={clickedCell}
        onCellClick={(row, col) => {
          setClickedCell({ row, col })
          setRippleKey((k) => k + 1)
        }}
      />
    </div>
  )
}

type DivGridProps = {
  rows: number
  cols: number
  cellSize: number
  clickedCell: { row: number; col: number } | null
  onCellClick: (row: number, col: number) => void
}

const DivGrid = ({ rows, cols, cellSize, clickedCell, onCellClick }: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  )

  return (
    <div
      className="relative mx-auto"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
        // Visible across full width, fades to transparent toward bottom
        maskImage:
          'linear-gradient(to bottom, black 50%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, black 50%, transparent 100%)',
      }}
    >
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols)
        const colIdx = idx % cols
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0
        const delayMs = clickedCell ? Math.max(0, distance * 50) : 0
        const durationMs = 250 + distance * 70

        return (
          <div
            key={idx}
            className={cn(
              'border-[0.5px] border-accent/10 bg-transparent opacity-40',
              'transition-opacity duration-150 hover:border-accent/25 hover:opacity-70 hover:bg-accent/5',
              clickedCell && 'animate-cell-ripple',
            )}
            style={
              clickedCell
                ? { animationDelay: `${delayMs}ms`, animationDuration: `${durationMs}ms` }
                : undefined
            }
            onClick={() => onCellClick(rowIdx, colIdx)}
          />
        )
      })}
    </div>
  )
}
