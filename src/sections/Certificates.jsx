import { certificates } from '../data/certificates.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { Tape } from '../components/Decor.jsx';
import { useLightbox } from '../components/Lightbox.jsx';

export default function Certificates() {
  const openLightbox = useLightbox();

  return (
    <section id="certificates" className="section certificates" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeader
          index="06"
          file="certificates/"
          title="Things I've"
          accent="completed"
          note="always learning ✎"
          id="certificates-title"
        />

        <ul className="cert-grid">
          {certificates.map((c, i) => (
            <Reveal as="li" className={`cert cert--${c.accent}`} key={c.id} delay={i * 110} style={{ '--tilt': `${[-1.5, 1, -0.8][i % 3]}deg` }}>
              <Tape />
              <button
                type="button"
                className="cert__preview"
                onClick={() => openLightbox({ src: c.full, alt: c.alt, caption: c.title, label: `${c.issuer} · ${c.date}` })}
                aria-label={`Enlarge certificate: ${c.title}`}
              >
                <img src={c.thumb} alt={c.alt} loading="lazy" decoding="async" width="720" height="480" />
                <span className="scrap__zoom" aria-hidden="true">
                  <Icon name="expand" size={14} />
                </span>
              </button>
              <div className="cert__body">
                <p className="cert__stamp mono">{c.type}</p>
                <h3>{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>
                <p className="cert__meta mono">
                  {c.programme} · {c.date}
                </p>
                <p className="cert__desc">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
