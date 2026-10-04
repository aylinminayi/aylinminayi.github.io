import { skillGroups, skillNotes } from '../data/skills.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          index="05"
          file="skills.json"
          title="My"
          accent="toolkit"
          note="no fake percentages, promise"
          id="skills-title"
        />

        <ul className="skills__legend mono" aria-label="Legend">
          {Object.entries(skillNotes).map(([key, n]) => (
            <li key={key}>
              <span className={`skill-mark skill-mark--${key}`} aria-hidden="true">
                {n.symbol}
              </span>
              {n.label}
            </li>
          ))}
        </ul>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal as="section" className={`skill-card skill-card--${group.id}`} key={group.id} delay={(i % 3) * 90} aria-labelledby={`skills-${group.id}`}>
              <p className="skill-card__file mono" aria-hidden="true">
                {group.file}
              </p>
              <h3 id={`skills-${group.id}`}>{group.title}</h3>
              <ul>
                {group.skills.map((s) => (
                  <li key={s.name} className={`skill ${s.note ? `skill--${s.note}` : ''}`}>
                    {s.name}
                    {s.note && (
                      <>
                        <span className={`skill-mark skill-mark--${s.note}`} aria-hidden="true">
                          {skillNotes[s.note].symbol}
                        </span>
                        <span className="sr-only"> ({skillNotes[s.note].label})</span>
                      </>
                    )}
                    {s.note === 'learning' && (
                      <span className="skill__learning mono" aria-hidden="true">
                        currently learning
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
