import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import {useState }from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand" onClick={closeMenu}>
        Heet<span>.</span>
      </a>

      <button
        className="navbar-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>

      <div
        id="navbar-links"
        className={`navbar-links ${menuOpen ? "active" : ""}`}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          HEY, I'M <span>HEET JAIN</span>
        </p>

        <h1>
          Building ideas into
          <span> web experiences.</span>
        </h1>

        <p className="hero-description">
          I'm a BTech Computer Science student
          exploring full-stack development and building
          practical applications with modern web technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects">Explore my projects ↗</a>
          <a href="#contact" className="hero-secondary">
            Get in touch
          </a>
        </div>

        <p className="hero-note">
          Currently learning, building, and improving.
        </p>
      </div>

      <div className="hero-image">
        <img src="/images/profile.png" alt="Heet Jain" />
      </div>
    </section>
  );
}


function ProjectCard({ name, description, liveUrl, image }) {
  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={`${name} screenshot`} />
      )}
      <h2>{name}</h2>
      <p>{description}</p>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
    </div>
  )
}

function Projects() {

  const projects = [
    {
      name: "Notes App",
      description: "A full-stack note-taking app with secure user authentication and complete CRUD functionality. Create, edit, and manage your notes with persistent storage and user-specific data.",
      liveUrl: "https://fullstacknotesapp.netlify.app",
      image: "/images/notesapp.jpg"
    },
    {
      name: "Expenses Tracker",
      description: "Take control of your finances with an interactive expense tracker featuring income and expense summaries, transaction management, searchable history, and visual analytics.",
      liveUrl: "https://income-expense-tracker-webapp.netlify.app",
      image: "/images/expensesapp.jpg"
    },
    {
      name: "QR Code Generator",
      description: "Generate scannable QR codes from URLs in seconds. Includes input validation, instant QR previews, and a convenient download option for quick sharing.",
      liveUrl: "https://qrcodegeneratorapiapp.netlify.app/",
      image: "/images/qrapp.jpg"
    },
    {
      name: "Weatherly",
      description: "A sleek weather application that fetches real-time conditions for searched cities, displaying temperature, feels-like readings, humidity, wind speed, and other key weather details.",
      liveUrl: "https://weather-updates-api-app.netlify.app/",
      image: "/images/weatherapp.jpg"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            liveUrl={project.liveUrl}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
