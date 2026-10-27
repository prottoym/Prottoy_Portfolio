'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Icon = ({ d, extra }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
    {extra}
  </svg>
)

const items = [
  { label: 'Projects', href: '/projects', d: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z' },
  { label: 'Contact', href: '/contact', d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { label: 'Resume', href: '/resume', d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h8' },
  {
    label: 'GitHub', href: 'https://github.com/prottoym', external: true,
    d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/prottoy-modak/', external: true,
    d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z',
    extra: <circle cx="4" cy="4" r="2" />,
  },
  { label: 'Email', href: 'mailto:prottoymodakprottoy@gmail.com', d: 'M4 6h16v12H4z M4 7l8 6 8-6' },
]

export default function Footer() {
  const [year, setYear] = useState('')
  useEffect(() => { setYear(new Date().getFullYear()) }, [])

  return (
    <footer className="foot">
      <div className="wrap bar">
        <span className="mono">© {year} Prottoy Modak</span>
        <nav className="ficons" aria-label="Footer">
          {items.map(({ label, href, d, extra, external }) => {
            const inner = <Icon d={d} extra={extra} />
            return external ? (
              <a key={label} className="ficon" href={href} data-tip={label} aria-label={label} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : href.startsWith('mailto:') ? (
              <a key={label} className="ficon" href={href} data-tip={label} aria-label={label}>{inner}</a>
            ) : (
              <Link key={label} className="ficon" href={href} data-tip={label} aria-label={label}>{inner}</Link>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}