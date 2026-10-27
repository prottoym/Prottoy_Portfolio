'use client'
import { useEffect, useRef, useState } from 'react'

const EMAIL = 'prottoymodakprottoy@gmail.com'
const PHOTO = '/assets/Photo.jpg' // photo

const Ico = ({ d }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

const P = {
  mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
  cap: 'M12 4L2 9l10 5 10-5-10-5z M6 11.5V16c0 1 3 3 6 3s6-2 6-3v-4.5',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  cal: 'M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4',
  copy: 'M9 9h10v10H9z M5 15V5h10',
  check: 'M5 12l5 5 9-10',
  chev: 'M9 6l6 6-6 6',
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
}

const rows = [
  [P.mail, 'Email', EMAIL, true],
  [P.cap, 'University', 'East West University'],
  [P.pin, 'Location', 'Dhaka, Bangladesh'],
  [P.cal, 'Graduation', 'Expected 2026'],
]

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [copied, setCopied] = useState(false)
  const [photoOk, setPhotoOk] = useState(true)
  const t = useRef()

  // Phone e default-e collapsed
  useEffect(() => {
    if (window.innerWidth < 1100) setOpen(false)
    return () => clearTimeout(t.current)
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      clearTimeout(t.current)
      t.current = setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <aside className="pside" aria-label="Profile">
      <button
        className="pside-head"
        aria-expanded={open}
        aria-controls="pside-body"
        onClick={() => setOpen(!open)}
      >
        {photoOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="avatar"
            src={PHOTO}
            alt="Prottoy Modak"
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <span className="avatar" role="img" aria-label="Portrait placeholder — photo to be added">PM</span>
        )}
        <span className="pside-id">
          <strong>Prottoy Modak</strong>
          <span className="role"></span>
        </span>
        <span className={`chev ${open ? 'open' : ''}`}><Ico d={P.chev} /></span>
      </button>

      <div id="pside-body" hidden={!open}>
        <ul className="prows">
          {rows.map(([d, label, value, canCopy]) => (
            <li className="prow" key={label}>
              <span className="pico"><Ico d={d} /></span>
              <span className="pval">
                <span className="plabel">{label}</span>
                <span>{value}</span>
              </span>
              {canCopy && (
                <button
                  className="icobtn"
                  onClick={copy}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  <Ico d={copied ? P.check : P.copy} />
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="psocial">
          <a href={`mailto:${EMAIL}`} aria-label="Email"><Ico d={P.mail} /></a>
          <a href="https://github.com/prottoym" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Ico d={P.github} /></a>
          <a href="https://www.linkedin.com/in/prottoy-modak/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><b className="mono">in</b></a>
        </div>
      </div>
    </aside>
  )
}