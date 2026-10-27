import SectionHead from '../components/SectionHead'
import Projects from '../components/Projects'
import { projects } from '@/data/projects'

export const metadata = { title: 'Projects — Prottoy Modak' }

export default function ProjectsPage() {
  return (
    <main id="main" className="wrap page">
      <SectionHead
        eyebrow="Portfolio"
        title="Selected Works"
        sub={`${projects.length} projects · Tap to explore`}
      />
      <Projects />
    </main>
  )
}