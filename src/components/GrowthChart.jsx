import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

// Simple SVG line chart with draw-on-load animation
const GrowthChart = ({ data }) => {
  const width = 800
  const height = 260
  const padding = 24

  const points = useMemo(() => {
    if (!data || data.length === 0) return []
    const xs = data.map((d) => d.x)
    const ys = data.map((d) => d.y)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    const xStep = (width - padding * 2) / (xs.length - 1)
    return data.map((d, i) => {
      const x = padding + i * xStep
      const y = padding + (1 - (d.y - minY) / (maxY - minY || 1)) * (height - padding * 2)
      return [x, y]
    })
  }, [data])

  const pathD = useMemo(() => {
    if (!points.length) return ''
    return points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ')
  }, [points])

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* grid */}
        <g opacity={0.3}>
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1={padding} x2={width - padding} y1={padding + i * ((height - padding * 2) / 4)} y2={padding + i * ((height - padding * 2) / 4)} stroke="#334155" strokeWidth="1" />
          ))}
        </g>
        {/* area gradient */}
        <defs>
          <linearGradient id="line" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* area fill */}
        {points.length > 1 && (
          <motion.path
            d={`${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`}
            fill="url(#fill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          />
        )}

        {/* line path with draw animation */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#line)"
          strokeWidth={3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {/* points */}
        {points.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={4}
            fill="#60a5fa"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}
          />
        ))}
      </svg>
    </div>
  )
}

export default GrowthChart
