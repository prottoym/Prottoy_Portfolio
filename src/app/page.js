import Link from 'next/link'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Featured from './components/Featured'

export default function Home() {
  return (
    <main id="main" className="home">
      <Sidebar />
      <div className="home-main">
        <Hero />
        <hr className="divider" />
        <Featured />
        <p>
          <Link className="btn ghost" href="/projects">View all projects →</Link>
        </p>
      </div>
    </main>
  )
}