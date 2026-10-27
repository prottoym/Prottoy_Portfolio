// // Technologies actually used in repositories (verified from package.json / source)
// const used = [
//   ['Languages', ['C', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS']],
//   ['Frontend', ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'daisyUI', 'Framer Motion']],
//   ['Backend & data', ['Better Auth', 'MongoDB', 'REST API consumption']],
//   ['Tools', ['Git', 'GitHub', 'Vercel']],
// ]

// // Self-reported as "learning" on the GitHub profile, not shown as project experience
// const learning = [
//   'Next.js (deepening)',
//   'AI / Machine Learning',
//   'NLP',
//   'Data Structures & Algorithms',
// ]

// export default function Skill() {
//   return (
//     <section id="skills" className="wrap sec">
//       <h2><span>02</span> Skills</h2>

//       <h3>Used in my projects</h3>
//       <div className="grid">
//         {used.map(([title, list]) => (
//           <div className="card" key={title}>
//             <h4>{title}</h4>
//             <ul className="tags">
//               {list.map((x) => <li key={x}>{x}</li>)}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <h3>
//         Currently learning <small>(self-reported on my GitHub profile)</small>
//       </h3>
//       <ul className="tags">
//         {learning.map((x) => <li key={x} className="dim">{x}</li>)}
//       </ul>
//     </section>
//   )
// }

const P = {
  av: 'Algorithm Visualizer',
  bd: 'BazarDor',
  fl: 'FitLog',
  vm: 'Vehicle Management System',
}

// [name, projects it was actually used in (verified from repo package.json / README)]
const cats = [
  { title: 'Languages', icon: '</>', wide: true, items: [
    ['C', [P.vm]], ['C++', []], ['JavaScript', [P.av]],
    ['TypeScript', [P.bd, P.fl]], ['HTML', []], ['CSS', []],
  ] },
  { title: 'Frontend', icon: '◧', items: [
    ['React', [P.av]], ['Next.js', [P.bd, P.fl]], ['Vite', [P.av]],
    ['Tailwind CSS', [P.av, P.bd, P.fl]], ['daisyUI', [P.bd, P.fl]], ['Framer Motion', [P.av]],
  ] },
  { title: 'Backend & data', icon: '▤', items: [
    ['MongoDB', [P.bd]], ['Better Auth', [P.bd]], ['REST API consumption', [P.fl]],
  ] },
  { title: 'Tools', icon: '⚙', items: [
    ['Git', []], ['GitHub', []], ['Vercel', [P.av]],
  ] },
]

const learning = ['Next.js (deepening)', 'AI / Machine Learning', 'NLP', 'Data Structures & Algorithms']

export default function Skill() {
  return (
    <>
      <p className="skill-note dim">
        <i className="dot" /> Highlighted = used in a featured project (number = how many). Hover for details.
      </p>

      <div className="skills-bento">
        {cats.map((c) => (
          <section className={`scard ${c.wide ? 'wide' : ''}`} key={c.title} aria-label={c.title}>
            <header>
              <span className="sicon mono" aria-hidden="true">{c.icon}</span>
              <h3>{c.title}</h3>
              <span className="count mono">{String(c.items.length).padStart(2, '0')}</span>
            </header>
            <ul className="schips">
              {c.items.map(([name, used]) => (
                <li
                  key={name}
                  className={used.length ? 'on' : ''}
                  title={used.length ? `Used in: ${used.join(', ')}` : undefined}
                >
                  {name}
                  {used.length > 0 && <sup>{used.length}</sup>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="learn" aria-label="Currently learning">
        <p className="eyebrow">Currently learning</p>
        <p className="dim">Self-reported on my GitHub profile, so not listed as project experience.</p>
        <ul className="schips">
          {learning.map((x) => <li key={x} className="soft">{x}</li>)}
        </ul>
      </section>
    </>
  )
}