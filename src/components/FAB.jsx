import React from 'react'
import { Plus } from 'lucide-react'

const FAB = () => {
  return (
    <button
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] border border-blue-400/30 flex items-center justify-center transition-transform hover:scale-105 focus:scale-105"
      style={{
        boxShadow: '0 0 0 0 rgba(59,130,246,0.45)',
        animation: 'pulseGlow 2.2s ease-out infinite',
      }}
      aria-label="Create"
    >
      <Plus size={24} />
    </button>
  )
}

export default FAB
