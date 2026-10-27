'use client'
import { useEffect, useRef } from 'react'

export default function ParticleBg() {
  const ref = useRef(null)

  useEffect(() => {
    // Reduced-motion user der jonno animation bondho
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, raf

    const dots = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
    }))

    const resize = () => {
      const d = window.devicePixelRatio || 1
      w = c.width = innerWidth * d
      h = c.height = innerHeight * d
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(245,165,36,.6)'
      for (const p of dots) {
        p.x = (p.x + p.vx + 1) % 1
        p.y = (p.y + p.vy + 1) % 1
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r * (window.devicePixelRatio || 1), 0, 7)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="particles" aria-hidden="true" />
}