const interests = ['Algorithms', 'Web apps', 'Problem solving', 'Gaming']

export default function Aboutme() {
  return (
    <div className="term-card">
      <div className="term-bar" aria-hidden="true">
        <i /><i /><i />
        <span className="mono">about.md</span>
      </div>
      <div className="term-body">
        <p className="hl">I build by learning, one project at a time.</p>
        <p className="dim">
          I&apos;m a Computer Science and Engineering student at East West University in
          Dhaka, interested in software development, algorithms and problem solving.
          My GitHub has console programs in C and C++, JavaScript web-apps, and
          React and Next.js projects.
        </p>
        <ul className="chips-row" aria-label="Interests">
          {interests.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </div>
    </div>
  )
}