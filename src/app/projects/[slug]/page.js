import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects, bySlug } from '@/data/projects'
import { Preview } from '../../components/Projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = bySlug(slug)
  return p ? { title: `${p.name} — Prottoy Modak`, description: p.short } : { title: 'Not found' }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const p = bySlug(slug)
  if (!p) notFound()
  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 3)

  return (
    <main id="main" className="wrap narrow page">
      <Link href="/projects">← All projects</Link>
      <h1 className="title">{p.name}</h1>
      <p className="lead dim">{p.overview}</p>
      <Preview p={p} />
      <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="row">
        <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">GitHub repository</a>
        {p.demo && <a className="btn ghost" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
      </div>
      <h2>Purpose</h2><p>{p.purpose}</p>
      <h2>Implemented features</h2>
      <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <h2>My contribution</h2><p className="dim">Details to be added by Prottoy.</p>
      <h2>Challenges</h2><p className="dim">Details to be added by Prottoy.</p>
      <h2>Possible improvements <small>(proposed, not implemented)</small></h2>
      <ul>{p.improvements.map((f) => <li key={f}>{f}</li>)}</ul>
      <h2>Related projects</h2>
      <ul>{related.map((r) => <li key={r.slug}><Link href={`/projects/${r.slug}`}>{r.name}</Link></li>)}</ul>
    </main>
  )
}