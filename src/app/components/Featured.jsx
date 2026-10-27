'use client'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { Card } from './Projects'
import SectionHead from './SectionHead'

const Arrow = ({ d }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

export default function Featured() {
  const ref = useRef(null)

  const go = (dir) => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="fsec" aria-label="Featured projects">
      <div className="fhead">
        <SectionHead as="h2" eyebrow="Featured work" title="Selected Projects" />
        <div className="arrows">
          <button className="arrow" onClick={() => go(-1)} aria-label="Previous projects"><Arrow d="M15 6l-6 6 6 6" /></button>
          <button className="arrow" onClick={() => go(1)} aria-label="Next projects"><Arrow d="M9 6l6 6-6 6" /></button>
        </div>
      </div>
      <div className="track" ref={ref} tabIndex={0} role="region" aria-label="Project carousel, scrollable">
        {projects.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
      </div>
    </section>
  )
}