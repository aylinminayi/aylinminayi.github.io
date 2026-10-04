import { experience } from '../data/experience.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Tag from '../components/Tag.jsx';
import Icon from '../components/Icon.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          index="02"
          file="experience.log"
          title="Where I've"
          accent="worked"
          note="4 weeks, a lot of kubectl"
          id="experience-title"
        />

        {experience.map((job) => (
          <Reveal as="article" className="job card card--pop" key={job.id} aria-labelledby={`${job.id}-title`}>
            <div className="job__head">
              <div>
                <p className="job__company mono">{job.company}</p>
                <h3 className="job__role" id={`${job.id}-title`}>
                  {job.role}
                </h3>
                <p className="job__dept">{job.department}</p>
              </div>
              <dl className="job__facts mono">
                <div>
                  <dt>when</dt>
                  <dd>{job.period}</dd>
                </div>
                <div>
                  <dt>length</dt>
                  <dd>{job.duration}</dd>
                </div>
                <div>
                  <dt>where</dt>
                  <dd>{job.location}</dd>
                </div>
              </dl>
            </div>

            <p className="job__summary">{job.summary}</p>

            <ol className="job__timeline">
              {job.timeline.map((t, i) => (
                <Reveal as="li" key={t.label} delay={i * 100}>
                  <span className="job__week mono">{t.label}</span>
                  <strong>{t.title}</strong>
                  <p>{t.text}</p>
                </Reveal>
              ))}
            </ol>

            <div className="job__foot">
              <div className="job__exposure">
                <p className="mono job__mini-label">hands-on exposure</p>
                <div className="tag-list">
                  {job.exposure.map((e) => (
                    <Tag key={e}>{e}</Tag>
                  ))}
                </div>
              </div>
              <a className="btn btn--ghost" href={job.projectLink}>
                See the project I built <Icon name="arrowDown" size={16} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
