import { profile } from '../data/profile.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { PixelHeart, Sparkle } from '../components/Decor.jsx';

export default function Contact() {
  const { email, links } = profile;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader index="08" file="contact.txt" title="Let's" accent="talk" id="contact-title" />

        <Reveal className="contact__card card card--pop">
          <Sparkle className="contact__sparkle" size={34} />
          <p className="contact__lead">
            Questions about InsightDesk, a role, or a team project? My inbox is open — I'd love to hear from you.
          </p>
          <a className="contact__email" href={`mailto:${email}`}>
            {email}
            <Icon name="arrowUpRight" size={28} />
          </a>
          <ul className="contact__links">
            <li>
              <a className="btn btn--primary" href={`mailto:${email}`}>
                <Icon name="mail" /> Send an email
              </a>
            </li>
            <li>
              <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> github.com/aylinminayi
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <footer className="footer container">
        <p className="mono">
          © {new Date().getFullYear()} Aylin Minayi · designed &amp; built with React + Vite <PixelHeart size={12} />
        </p>
        <a href="#home" className="footer__top mono">
          <Icon name="arrowUp" size={14} /> back to top
        </a>
      </footer>
    </section>
  );
}
