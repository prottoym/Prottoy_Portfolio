'use client'
import { useRef, useState } from 'react'

const EMAIL = 'prottoymodakprottoy@gmail.com'
const GITHUB = 'https://github.com/prottoym'
const LINKEDIN = 'https://www.linkedin.com/in/prottoy-modak/'
const Phone = '01799784242'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
)

export default function Contact() {
  const [state, setState] = useState('idle') // idle | copied | failed
  const t = useRef()

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setState('copied')
    } catch {
      setState('failed')
    }
    clearTimeout(t.current)
    t.current = setTimeout(() => setState('idle'), 2200)
  }

  return (
    <>
      <div className="term-card cterm">
        <div className="term-bar" aria-hidden="true">
          <i /><i /><i />
          <span className="mono">contact.sh</span>
        </div>
        <pre className="term-body mono" aria-label="Contact summary"><code>{`$ contact --list
email     ${EMAIL}
github    github.com/prottoym
linkedin  linkedin.com/in/prottoy-modak
location  Dhaka, Bangladesh
Phone     01799784242`}</code></pre>
      </div>

      <div className="contact-grid">
        <div className="ccard main">
          <p className="eyebrow">Email</p>
          <p className="cbig">{EMAIL}</p>
          <p className="dim">The quickest way to reach me.</p>
          <div className="row">
            <a className="btn" href={`mailto:${EMAIL}`}>Send email</a>
            <button type="button" className="btn ghost" onClick={copy}>
              {state === 'copied' ? '✓ Copied' : 'Copy address'}
            </button>
            <span className="dim" role="status" aria-live="polite">
              {state === 'failed' && 'Couldn’t copy — please select it manually.'}
            </span>
          </div>
        </div>

        <a className="ccard link" href={GITHUB} target="_blank" rel="noopener noreferrer">
          <p className="eyebrow">GitHub</p>
          <p className="cmid">github.com/prottoym</p>
          <p className="dim">Source code for all my projects.</p>
          <span className="go"><Arrow /></span>
        </a>

        <a className="ccard link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          <p className="eyebrow">LinkedIn</p>
          <p className="cmid">linkedin.com/in/prottoy-modak</p>
          <p className="dim">Connect with me professionally.</p>
          <span className="go"><Arrow /></span>
        </a>

        <div className="ccard">
          <p className="eyebrow">Location</p>
          <p className="cmid">Dhaka, Bangladesh</p>
          <p className="dim">CSE student at East West University.</p>
        </div>
      </div>
    </>
  )
}