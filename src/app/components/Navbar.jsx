'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/skills', 'Skills'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const path = usePathname()

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'dark')
  }, [])

  const flip = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    setTheme(t)
    document.documentElement.dataset.theme = t
    try { localStorage.setItem('theme', t) } catch {}
  }

  const on = (h) => (h === '/' ? path === '/' : path.startsWith(h))

  return (
    <header className="pill-wrap">
      <nav className="pill" aria-label="Main">
        <Link
          href="/"
          className="pill-link pill-home"
          aria-label="Home"
          aria-current={on('/') ? 'page' : undefined}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6.5H9V21H4a1 1 0 0 1-1-1z" />
          </svg>
        </Link>

        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="pill-link"
            aria-current={on(href) ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>

      <button
        className="theme-btn"
        onClick={flip}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </header>
  )
}