import { projects } from '../data/projects.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import ScrapShot from '../components/ScrapShot.jsx';
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx';
import Tag from '../components/Tag.jsx';
import Icon from '../components/Icon.jsx';
import { Sparkle } from '../components/Decor.jsx';

const tilts = [-1.6, 2, -2.2, 1.4, -1, 1.8];

function CodeButton({ href, children = 'View project code', variant = 'primary' }) {
  return (
    <a className={`btn btn--${variant} btn--lg`} href={href} target="_blank" rel="noopener noreferrer">
      <Icon name="github" size={20} /> {children}
      <Icon name="arrowUpRight" size={16} />
      <span className="sr-only">(opens GitHub in a new tab)</span>
    </a>
  );
}

function AiOutputCard({ fields }) {
  return (
    <div className="json-card" role="group" aria-label="Structured output Gemini returns for each message">
      <p className="json-card__file mono" aria-hidden="true">
        gemini-response.json
      </p>
      <pre className="json-card__code mono">
        <code>
          <span className="json-punc">{'{'}</span>
          {'\n'}
          {fields.map((f, i) => (
            <span key={f.key}>
              {'  '}
              <span className="json-key">"{f.key}"</span>
              <span className="json-punc">: </span>
              <span className="json-val">"{f.value}"</span>
              {i < fields.length - 1 && <span className="json-punc">,</span>}
              {'\n'}
            </span>
          ))}
          <span className="json-punc">{'}'}</span>
        </code>
      </pre>
    </div>
  );
}

function FeaturedCaseStudy({ project }) {
  const [hero, ...gallery] = project.gallery;

  return (
    <article className="feature" aria-labelledby={`${project.id}-name`}>
      {/* ---------- Intro ---------- */}
      <div className="feature__intro">
        <Reveal className="feature__intro-text">
          <p className="feature__badge mono">
            <Sparkle size={12} /> featured project
          </p>
          <h3 className="feature__name" id={`${project.id}-name`}>
            {project.name}
          </h3>
          <p className="feature__kicker mono">{project.kicker}</p>
          <p className="feature__oneliner">{project.oneLiner}</p>
          <div className="feature__actions">
            <CodeButton href={project.repo} />
          </div>
        </Reveal>

        <Reveal className="feature__intro-shot" delay={150}>
          <ScrapShot image={hero} label="fig. 01" tilt={1.4} loading="eager" className="scrap--hero" />
          <p className="feature__annotation hand" aria-hidden="true">
            ← what the support team sees
          </p>
        </Reveal>
      </div>

      {/* ---------- Problem / approach / AI output ---------- */}
      <div className="feature__story">
        <Reveal className="note-card">
          <p className="note-card__label mono">the problem</p>
          <p>{project.problem}</p>
        </Reveal>
        <Reveal className="note-card" delay={100}>
          <p className="note-card__label mono">what I built</p>
          <p>{project.approach}</p>
        </Reveal>
        <Reveal className="feature__ai" delay={200}>
          <p className="note-card__label mono">what Gemini sends back</p>
          <AiOutputCard fields={project.aiOutput} />
        </Reveal>
      </div>

      {/* ---------- Architecture ---------- */}
      <div className="feature__block">
        <h4 className="feature__subhead">
          How it <em>works</em>
        </h4>
        <ArchitectureDiagram architecture={project.architecture} />
      </div>

      {/* ---------- Highlights ---------- */}
      <div className="feature__block">
        <h4 className="feature__subhead">
          Engineering <em>highlights</em>
        </h4>
        <ul className="highlights">
          {project.highlights.map((h, i) => (
            <Reveal as="li" className="highlight" key={h.title} delay={(i % 3) * 90}>
              <span className="highlight__num mono" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h5>{h.title}</h5>
              <p>{h.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* ---------- Gallery ---------- */}
      <div className="feature__block">
        <h4 className="feature__subhead">
          From the <em>build</em>
          <span className="feature__subnote hand">real screenshots ✿ click to enlarge</span>
        </h4>
        <div className="collage">
          {gallery.map((img, i) => (
            <Reveal className={`collage__item collage__item--${img.size} collage__item--${i + 1}`} key={img.src} delay={(i % 2) * 120}>
              <ScrapShot image={img} label={`fig. ${String(i + 2).padStart(2, '0')}`} tilt={tilts[i % tilts.length]} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- Plot twists ---------- */}
      <div className="feature__block">
        <h4 className="feature__subhead">
          Plot <em>twists</em>
          <span className="feature__subnote hand">things that broke &amp; how I fixed them</span>
        </h4>
        <ul className="twists">
          {project.plotTwists.map((t, i) => (
            <Reveal as="li" className="twist" key={t.problem} delay={i * 90}>
              <p className="twist__problem">
                <span className="mono twist__label">issue</span>
                {t.problem}
              </p>
              <span className="twist__arrow" aria-hidden="true">
                →
              </span>
              <p className="twist__fix">
                <span className="mono twist__label twist__label--fix">fix</span>
                {t.fix}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* ---------- Stack + CTA ---------- */}
      <div className="feature__footer">
        <div className="stack">
          <p className="mono stack__label">built with</p>
          {project.stack.map((g) => (
            <div className="stack__group" key={g.group}>
              <span className="stack__group-name mono">{g.group}</span>
              <div className="tag-list">
                {g.items.map((item) => (
                  <Tag key={item} tone={g.group === 'early stage' ? 'muted' : 'pink'}>
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="feature__cta">
          <p className="hand">want to read the code?</p>
          <CodeButton href={project.repo} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <Reveal as="article" className="project-card card card--pop">
      <h3>{project.name}</h3>
      {project.kicker && <p className="mono project-card__kicker">{project.kicker}</p>}
      <p>{project.oneLiner}</p>
      {project.repo && <CodeButton href={project.repo} variant="ghost" />}
    </Reveal>
  );
}

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="project" className="section project" aria-labelledby="project-title">
      <div className="container">
        <SectionHeader
          index="03"
          file="featured-project/"
          title="The thing I"
          accent="built"
          note="my favourite part ♡"
          id="project-title"
        />
        {featured && <FeaturedCaseStudy project={featured} />}
        {others.length > 0 && (
          <div className="project-grid">
            {others.map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
