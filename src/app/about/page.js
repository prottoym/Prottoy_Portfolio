import SectionHead from '../components/SectionHead'
import Aboutme from '../components/Aboutme'
import Education from '../components/Education'
// import Stats from '../components/Stats'

export const metadata = { title: 'About — Prottoy Modak' }

export default function About() {
  return (
    <main id="main" className="wrap narrow page">
      <SectionHead eyebrow="Who I am" title="About Me" />
      <Aboutme />
      <Education />
      {/* <Stats /> */}
    </main>
  )
}