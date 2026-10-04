import { activities, featuredActivity as racing } from '../data/activities.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';

export default function Activities() {
  return (
    <section id="activities" className="section activities" aria-labelledby="activities-title">
      <div className="container">
        <SectionHeader
          index="04"
          file="activities/"
          title="Engineering"
          accent="life"
          note="beyond the classroom"
          id="activities-title"
        />

        <Reveal as="article" className="racing card card--pop" aria-labelledby="racing-title">
          <div className="racing__head">
            <div>
              <p className="racing__motto mono">{racing.motto}</p>
              <h3 className="racing__name" id="racing-title">
                {racing.name}
                <span>{racing.unit}</span>
              </h3>
            </div>
            <div className="racing__flag" aria-hidden="true" />
          </div>

          <div className="racing__cols">
            <div className="racing__col racing__col--me">
              <p className="racing__col-label mono">my role</p>
              <p className="racing__role">{racing.myRole}</p>
              <p className="racing__period mono">{racing.period}</p>
              <p>{racing.me}</p>
            </div>

            <div className="racing__col racing__col--team">
              <p className="racing__col-label mono">the team</p>
              <p>{racing.team.intro}</p>
              <ul className="racing__achievements" aria-label="Team achievements">
                {racing.team.achievements.map((a) => (
                  <li key={a.event}>
                    <span className="team-stamp mono">team achievement</span>
                    <strong>{a.result}</strong>
                    <span>
                      {a.category} · {a.event}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="racing__disclaimer">
                These results belong to the whole OzU Racing team — they aren't personal awards.{' '}
                <a href={racing.source.href} target="_blank" rel="noopener noreferrer">
                  Source: {racing.source.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="club-list">
          {activities.map((a, i) => (
            <Reveal as="li" className="club card" key={a.id} delay={i * 100}>
              <span className="club__icon" aria-hidden="true">
                <Icon name={a.icon} size={22} />
              </span>
              <div>
                <h3>{a.name}</h3>
                <p className="mono">
                  {a.role} · {a.period}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
