import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const Navbar = ({ darkMode, onToggle }) => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 dark:bg-slate-900/70 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Dark mode toggle */}
        <button
          aria-label="Toggle theme"
          onClick={onToggle}
          className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
        >
          <span className="relative inline-flex h-9 w-16 items-center rounded-full border border-slate-700 bg-slate-800/70 p-1 transition-all">
            <span
              className={`h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-transform ${
                darkMode ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </span>
          {darkMode ? (
            <Moon size={18} className="text-blue-400" />
          ) : (
            <Sun size={18} className="text-yellow-300" />
          )}
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 select-none">
          <span className="text-xl sm:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]">
            AnalyticsHub
          </span>
        </div>

        {/* Right: Avatar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/60 shadow-inner shadow-slate-900 flex items-center justify-center text-slate-200 text-sm font-medium">
              AH
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
