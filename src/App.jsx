import { Sidebar, SECTIONS } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useReveal } from './hooks/useReveal';

const SECTION_IDS = SECTIONS.map((s) => s.id);

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 16, behavior: 'smooth' });
}

function App() {
  const active = useScrollSpy(SECTION_IDS);
  useReveal();

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-ink)', background: 'var(--color-canvas)' }}>
      <Sidebar active={active} onNavigate={scrollTo} />
      <div className="main-offset" style={{ marginLeft: 240 }}>
        <Hero onScrollToProjects={() => scrollTo('projects')} onScrollToAbout={() => scrollTo('about')} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
