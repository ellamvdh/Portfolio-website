import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectdata.json";

export default function Home() {
  // Haal projects array uit de JSON
  const projects = projectData.projects; 
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        
        {/* Decorative glow behind profile photo */}
        <div className="hero-glow"></div>
        
        {/* Hero content */}
        <div className="hero-content">
          
          {/* Profile photo */}
          <img
            src={siteConfig.aboutImage}
            alt={siteConfig.name}
            className="hero-img"
          />

          {/* Name */}
          <h1 className="hero-title">{siteConfig.name}</h1>

          {/* Role */}
          <p className="hero-subtitle">{siteConfig.role}</p>

          {/* Tagline */}
          <p className="hero-tagline">{siteConfig.tagline}</p>
        </div>
      </section>
      {/* Projecten Section */}
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Mijn Projecten</h2>

          {/* Grid with ProjectCards */}
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      

    </div>
  );
}
