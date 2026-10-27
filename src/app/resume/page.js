import Link from 'next/link'

export const metadata = { title: 'Resume — Prottoy Modak' }

// Resume ready hole public/resume.pdf rakho ar ekhane '/resume.pdf' dao
const RESUME_URL = '/assets/Prottoy_Modak_Resume.pdf'

export default function Resume() {
  return (
    <main id="main" className="wrap narrow page">
      <h1 className="title">Resume</h1>
      {RESUME_URL ? (
        <>
          <div className="row">
            <a className="btn" href={RESUME_URL} target="_blank" rel="noopener noreferrer">View</a>
            <a className="btn ghost" href={RESUME_URL} download>Download</a>
          </div>
          <object data={RESUME_URL} type="application/pdf" className="pdf" aria-label="Resume PDF">
            <p>Preview unavailable. Use the buttons above.</p>
          </object>
        </>
      ) : (
        <div className="card">
          <p><strong>Resume coming soon.</strong> The file hasn’t been added yet.</p>
          <p className="dim">
            In the meantime, see my <Link href="/projects">projects</Link> or{' '}
            <a href="mailto:prottoymodakprottoy@gmail.com">email me</a>.
          </p>
        </div>
      )}
    </main>
  )
}