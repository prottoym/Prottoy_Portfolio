'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

const LABEL = { live: 'Live', wip: 'WIP', archived: 'Archived', source: 'Source' }
const ORDER = ['live', 'wip', 'archived', 'source']
// status na dile: demo thakle "live", nahole "source"
const statusOf = (p) => p.status || (p.demo ? 'live' : 'source')

// Project detail page eta-o use kore
export function Preview({ p, bare = false }) {
  const [bad, setBad] = useState(!p.image)
  if (bad && bare) return <div className="preview" aria-hidden="true" />
  return bad ? (
    <div className="preview" role="img" aria-label={`${p.name} — screenshot not yet added`}>
      <span className="mono">{p.name}</span>
      <small>preview coming soon</small>
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="preview" src={p.image} alt={bare ? '' : `Screenshot of ${p.name}`} loading="lazy" onError={() => setBad(true)} />
  )
}

export function Card({ p, i }) {
  const s = statusOf(p)
  return (
    <article className="pcard">
      <div className="pcard-media"><Preview p={p} bare /></div>
      <span className="pcard-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>

      <div className="pcard-top">
        <span className="mono" title="Last updated">{p.year || '2026'}</span>
        <span className={`status ${s}`}><i />{LABEL[s]}</span>
      </div>

      <div className="pcard-body">
        <h3>{p.name}</h3>
        <div className="pcard-extra">
          <div>
            <p>{p.short}</p>
            <ul className="ptags">{p.tech.slice(0, 3).map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
        <div className="pcard-foot">
          <span className="plinks">
            <a href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
            {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
          </span>
          <span className="tap">Tap to know more</span>
        </div>
      </div>

      <Link className="overlay" href={`/projects/${p.slug}`} aria-label={`View details of ${p.name}`} />
    </article>
  )
}

export default function Projects({ limit, filters = true }) {
  const [f, setF] = useState('all')
  const present = ORDER.filter((k) => projects.some((p) => statusOf(p) === k))
  const list = (f === 'all' ? projects : projects.filter((p) => statusOf(p) === f)).slice(0, limit)

  return (
    <>
      {filters && (
        <div className="chips" role="group" aria-label="Filter projects">
          <button className="chip all" aria-pressed={f === 'all'} onClick={() => setF('all')}>
            All ({projects.length})
          </button>
          {present.map((k) => (
            <button key={k} className={`chip ${k}`} aria-pressed={f === k} onClick={() => setF(k)}>
              <i />{LABEL[k]}
            </button>
          ))}
        </div>
      )}
      <div className="bento">
        {list.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
      </div>
    </>
  )
}