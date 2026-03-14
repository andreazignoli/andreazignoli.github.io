'use client'

import React, { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(null)
  const [rippleKey, setRippleKey] = useState(0)

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <DivGrid
        key={rippleKey}
        rows={rows}
        cols={cols}
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
        // Fade out toward the bottom and sides
        maskImage:
          'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 100%)',
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
