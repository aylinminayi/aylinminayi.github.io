import Nav from './components/Nav.jsx';
import { LightboxProvider } from './components/Lightbox.jsx';
import Hero from './sections/Hero.jsx';
import Marquee from './sections/Marquee.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import FeaturedProject from './sections/FeaturedProject.jsx';
import Activities from './sections/Activities.jsx';
import Skills from './sections/Skills.jsx';
import Certificates from './sections/Certificates.jsx';
import Music from './sections/Music.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <LightboxProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <FeaturedProject />
        <Activities />
        <Skills />
        <Certificates />
        <Music />
        <Contact />
      </main>
    </LightboxProvider>
  );
}
