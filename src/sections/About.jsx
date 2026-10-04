import { about } from '../data/profile.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader index="01" file="about.md" title="A little" accent="about me" id="about-title" />

        <div className="about__grid">
          <Reveal className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>
                {p}
              </p>
            ))}

            <div className="about__langs">
              <p className="mono about__mini-label">languages</p>
              <ul>
                {about.languages.map((l) => (
                  <li key={l.name} className="mono">
                    {l.name} <span>— {l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="about__side">
            <Reveal className="edu-card card" delay={120}>
              <p className="edu-card__label mono">education</p>
              {about.education.map((e) => (
                <div className="edu-card__item" key={e.school}>
                  {e.logo && (
                    <img
                      className="edu-card__logo"
                      src={e.logo.src}
                      alt={e.logo.alt}
                      width={e.logo.width}
                      height={e.logo.height}
                      loading="lazy"
                    />
                  )}
                  <div className="edu-card__head">
                    <h3>{e.school}</h3>
                    {e.badge && <span className="edu-card__badge mono">{e.badge}</span>}
                  </div>
                  <p className="edu-card__meta mono">
                    {e.place} · {e.period}
                  </p>
                  {e.lines.length > 0 && (
                    <ul>
                      {e.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
