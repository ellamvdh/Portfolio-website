import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectdata.json";
import projectData2 from "../data/projectdata2.json";

export default function Home() {
  const allProjects = [
    ...projectData.projects,
    ...projectData2.projects,
  ];

  const highlights = allProjects.filter(p => p.highlight);
  const otherProjects = allProjects.filter(p => !p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <img
            src={siteConfig.aboutImage}
            alt={siteConfig.name}
            className="hero-img"
          />
          <h1 className="hero-title">{siteConfig.name}</h1>
          <p className="hero-subtitle">{siteConfig.role}</p>
          <p className="hero-tagline">{siteConfig.tagline}</p>
        </div>
      </section>

      {/* Projects Layout */}
      <section className="projects-section">
        <div className="projects-container projects-split">

          {/* LEFT: Highlights */}
          <aside className="projects-highlights">
            <h2 className="projects-title">Highlights</h2>

            <div className="highlights-list">
              {highlights.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </aside>

          {/* RIGHT: All other projects */}
          <div className="projects-main">
            <h2 className="projects-title">All Projects</h2>

            <div className="projects-grid">
              {otherProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
