import { music } from '../data/profile.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';

// Small "beyond code" section — piano.
export default function Music() {
  return (
    <section id="music" className="section music" aria-labelledby="music-title">
      <div className="container">
        <SectionHeader index="07" file="music.md" title="Beyond the" accent="code" id="music-title" />

        <Reveal as="article" className="music-card card card--pop" aria-labelledby="piano-title">
          <span className="music-card__icon" aria-hidden="true">
            🎹
          </span>
          <div className="music-card__body">
            <h3 id="piano-title">
              {music.title} <span className="music-card__since mono">{music.since}</span>
            </h3>
            <p>{music.text}</p>
            <p className="music-card__detail mono">{music.detail}</p>
          </div>
          <div className="music-card__keys" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} className={[0, 1, 3, 4, 5, 7, 8, 10, 11, 12].includes(i) ? 'has-black' : ''} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
