import { Sparkle } from '../components/Decor.jsx';

const words = ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Gemini AI', 'Docker', 'Kubernetes', 'Google Cloud', 'GitHub Actions', 'Linux'];

// Decorative ribbon between hero and content. Hidden from assistive tech;
// the same technologies are listed accessibly in the Skills section.
export default function Marquee() {
  const row = (key) => (
    <div className="marquee__row" key={key}>
      {words.map((w) => (
        <span key={w + key} className="marquee__item">
          {w} <Sparkle size={12} />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-clip" aria-hidden="true">
      <div className="marquee">
        <div className="marquee__track">{[row('a'), row('b')]}</div>
      </div>
    </div>
  );
}
