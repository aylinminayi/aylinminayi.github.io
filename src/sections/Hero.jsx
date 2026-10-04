import { profile } from '../data/profile.js';
import Terminal from '../components/Terminal.jsx';
import Icon from '../components/Icon.jsx';
import RansomName from '../components/RansomName.jsx';
import { Sparkle, Tape } from '../components/Decor.jsx';

export default function Hero() {
  const { firstName, lastName, tagline, interests, email, links, photo, terminal, heroHello, heroLabels } = profile;

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <Sparkle className="hero__sparkle hero__sparkle--1" size={30} />
      <Sparkle className="hero__sparkle hero__sparkle--3" size={24} />

      <div className="hero__grid container">
        <div className="hero__visual">
          <figure className="polaroid">
            <Tape className="tape--tl" />
            <Tape className="tape--br" />
            <picture>
              <source srcSet={photo.webp} type="image/webp" />
              <img src={photo.jpg} alt={photo.alt} width="720" height="900" fetchPriority="high" />
            </picture>
            <figcaption className="polaroid__caption hand">{photo.note}</figcaption>
          </figure>

          <Terminal script={terminal} />
        </div>

        <div className="hero__text">
          <p className="hero__hello label-box mono">{heroHello}</p>

          <h1 className="hero__name" id="hero-name">
            <RansomName lines={[firstName, lastName]} />
          </h1>

          <div className="hero__labels">
            {heroLabels.map((label) => (
              <p className="label-box" key={label}>
                {label}
              </p>
            ))}
          </div>

          <p className="hero__tagline">{tagline}</p>

          <ul className="hero__interests" aria-label="Interests">
            {interests.map((item) => (
              <li key={item} className="mono">
                {item}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a className="btn btn--primary" href={links.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a className="btn" href={`mailto:${email}`}>
              <Icon name="mail" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
