import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.08, duration: 0.45, ease: 'easeOut' } }),
}

const ActivityFeed = ({ items }) => {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4">
      <h3 className="text-slate-100 font-medium mb-3">Recent Activity</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            animate="show"
            variants={itemVariants}
            className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60"
          >
            <div className="mt-1 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div>
              <p className="text-sm text-slate-200">{item.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityFeed
