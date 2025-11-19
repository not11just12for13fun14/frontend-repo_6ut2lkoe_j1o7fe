import React, { useEffect, useMemo, useState } from 'react'
import { TrendingUp, Users, Activity, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import MetricCard from './components/MetricCard'
import GrowthChart from './components/GrowthChart'
import ActivityFeed from './components/ActivityFeed'
import FAB from './components/FAB'
import './index.css'

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const metrics = [
    { icon: Eye, value: '12.4k', label: 'Total Visitors', progress: 72, accent: 'blue' },
    { icon: Users, value: '3.1k', label: 'New Signups', progress: 58, accent: 'cyan' },
    { icon: Activity, value: '84%', label: 'Engagement', progress: 84, accent: 'emerald' },
    { icon: TrendingUp, value: '$48.9k', label: 'MRR', progress: 66, accent: 'violet' },
  ]

  const chartData = useMemo(
    () => [
      { x: 'Jan', y: 120 },
      { x: 'Feb', y: 160 },
      { x: 'Mar', y: 220 },
      { x: 'Apr', y: 280 },
      { x: 'May', y: 340 },
      { x: 'Jun', y: 420 },
    ],
    []
  )

  const activities = [
    { title: 'New user signed up: alex@acme.io', time: '2m ago' },
    { title: 'Payment received: $1,200 - Enterprise Plan', time: '14m ago' },
    { title: 'Server response time improved by 8%', time: '1h ago' },
    { title: 'Weekly report generated for 24 teams', time: '3h ago' },
    { title: 'Churn alert triggered for 3 accounts', time: '6h ago' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar darkMode={dark} onToggle={() => setDark((v) => !v)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics grid + activity side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <MetricCard key={i} {...m} />
              ))}
            </div>

            {/* Chart */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-slate-100 font-medium">User Growth — Last 6 Months</h3>
                <span className="text-xs text-slate-500">Quarterly</span>
              </div>
              <GrowthChart data={chartData} />
            </div>
          </section>

          {/* Activity feed */}
          <aside className="lg:col-span-4">
            <ActivityFeed items={activities} />
          </aside>
        </div>
      </main>

      <FAB />

      {/* keyframes for FAB glow */}
      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.45); }
          70% { box-shadow: 0 0 0 20px rgba(59,130,246,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
      `}</style>
    </div>
  )
}

export default App
