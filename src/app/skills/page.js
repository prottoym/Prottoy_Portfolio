import SectionHead from '../components/SectionHead'
import Skill from '../components/Skill'

export const metadata = { title: 'Skills — Prottoy Modak' }

export default function SkillsPage() {
  return (
    <main id="main" className="wrap page">
      <SectionHead
        eyebrow="Toolbox"
        title="Skills"
        sub="Technologies from my public repositories, grouped by what they do"
      />
      <Skill />
    </main>
  )
}