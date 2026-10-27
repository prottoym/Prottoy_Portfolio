export default function SectionHead({ eyebrow, title, sub, as: H = 'h1' }) {
  return (
    <header className="head">
      <p className="eyebrow">{eyebrow}</p>
      <H className="title">{title}</H>
      <span className="rule" />
      {sub && <p className="dim">{sub}</p>}
    </header>
  )
}