import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero2">
      <p className="eyebrow">Hello! I&apos;m</p>
      <h1 className="big">
        Prottoy Modak<span className="caret" aria-hidden="true" />
      </h1>
      <p className="sub">
        CSE Student &amp; Aspiring <b className="accent">Software</b> Developer
      </p>
      <p className="lead dim">
        I learn by building: <b>web apps</b> in React and Next.js, console programs in
        C and C++, and <b>algorithm</b> visualizations. Studying at East West University, Dhaka.
      </p>
      <div className="row">
        <Link className="btn ghost lg" href="/resume">
          Resume
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 8, verticalAlign: '-3px' }}>
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
          </svg>
        </Link>
        <Link className="btn lg" href="/projects">Explore Projects</Link>
      </div>
    </section>
  )
}