import SectionHead from '../components/SectionHead'
import Contact from '../components/Contact'

export const metadata = { title: 'Contact — Prottoy Modak' }

export default function ContactPage() {
  return (
    <main id="main" className="wrap narrow page">
      <SectionHead eyebrow="Get in touch" title="Contact" sub="Email is the best way to reach me" />
      <Contact />
    </main>
  )
}