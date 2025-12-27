export default function ProjectHeader({ project }) {
  return (
    <div className="project-header">
      {/* Banner image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="project-header-img"
      />

      {/* Gradient overlay */}
      <div className="project-header-overlay" />

      {/* Text overlay */}
      <div className="project-header-text">
        <h1 className="project-header-title">{project.title}</h1>
        <p className="project-header-tagline">{project.tagline}</p>
      </div>
    </div>
  );
}
