import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const MetricCard = ({ icon: Icon, value, label, progress = 65, accent = 'blue' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const barColor = {
    blue: 'from-blue-500 to-blue-400',
    cyan: 'from-cyan-500 to-cyan-400',
    violet: 'from-violet-500 to-violet-400',
    emerald: 'from-emerald-500 to-emerald-400',
  }[accent] || 'from-blue-500 to-blue-400'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-5 shadow-xl shadow-slate-950/30 overflow-hidden"
    >
      {/* subtle corner glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700/70 flex items-center justify-center text-blue-300">
          <Icon size={20} />
        </div>
        <div className="ml-auto text-right">
          <div className="text-3xl font-semibold text-slate-100 tracking-tight">{value}</div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      </div>

      {/* progress */}
      <div className="mt-5">
        <div className="h-2 rounded-full bg-slate-700/50 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${progress}%` } : {}}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
            className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
          />
        </div>
        <div className="mt-2 text-xs text-slate-500">{progress}%</div>
      </div>
    </motion.div>
  )
}

export default MetricCard
