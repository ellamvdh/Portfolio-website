export default function ProjectInfo({ project }) {
  const paragraphs = project.description.split("\n\n");

  return (
    <div className="project-info">
      <div className="project-info-grid">

        {/* Beschrijving */}
        <div className="project-info-description">
          <h2 className="project-info-title">
            Over dit project
          </h2>

          {paragraphs.map((text, i) => (
            <p key={i} className="project-info-text">
              {text}
            </p>
          ))}
        </div>

        {/* Sidebar */}
        <div className="project-info-sidebar">
          <h3 className="project-info-sidebar-title">
            Details
          </h3>

          <ul className="project-info-list">
            <li className="project-info-item">
              <span className="project-info-label">Rol</span>
              <span>{project.projectRole}</span>
            </li>

            <li className="project-info-item">
              <span className="project-info-label">Tijdlijn</span>
              <span>{project.timeline}</span>
            </li>

            <li className="project-info-item project-info-tags">
              <span className="project-info-label">Tags</span>
              <div className="project-info-tags-list">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          </ul>

          {(project.git || project.itch) && (
            <div className="project-info-actions">
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-info-btn project-info-btn-secondary"
                >
                  GitHub
                </a>
              )}

              {project.itch && (
                <a
                  href={project.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-info-btn project-info-btn-primary"
                >
                  Itch.io
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
