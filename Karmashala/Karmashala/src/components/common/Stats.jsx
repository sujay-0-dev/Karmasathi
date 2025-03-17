"use client"

import { useState, useEffect } from "react"
import "./Stats.css"

const Stats = () => {
  const [stats, setStats] = useState({
    artisans: 0,
    products: 0,
    loans: 0,
    villages: 0,
  })

  const finalStats = {
    artisans: 1250,
    products: 4800,
    loans: 850,
    villages: 120,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const newStats = { ...prevStats }
        let completed = true

        Object.keys(finalStats).forEach((key) => {
          if (prevStats[key] < finalStats[key]) {
            const increment = Math.ceil(finalStats[key] / 50)
            newStats[key] = Math.min(prevStats[key] + increment, finalStats[key])
            completed = false
          }
        })

        if (completed) clearInterval(interval)
        return newStats
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-users"></i>
        </div>
        <div className="stat-number">{stats.artisans.toLocaleString()}+</div>
        <div className="stat-title">Artisans Empowered</div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="stat-number">{stats.products.toLocaleString()}+</div>
        <div className="stat-title">Products Listed</div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-hand-holding-usd"></i>
        </div>
        <div className="stat-number">{stats.loans.toLocaleString()}+</div>
        <div className="stat-title">Micro-Loans Provided</div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-home"></i>
        </div>
        <div className="stat-number">{stats.villages.toLocaleString()}+</div>
        <div className="stat-title">Villages Reached</div>
      </div>
    </div>
  )
}

export default Stats

