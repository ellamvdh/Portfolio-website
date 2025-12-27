import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProjectMechanics({ project }) {
  if (!project.mechanics || project.mechanics.length === 0) {
    return null;
  }

  return (
    <div className="project-mechanics">
      <h2 className="project-mechanics-title">Code Highlights</h2>

      {project.mechanics.map((m, i) => (
        <div key={i} className="project-mechanics-item">
          
          {/* Title + Description */}
          <div className="project-mechanics-text">
            <h3 className="project-mechanics-subtitle">{m.subtitle}</h3>
            <p className="project-mechanics-description">{m.description}</p>
          </div>

          {/* Code + Image */}
          <div className="project-mechanics-grid">
            
            {/* Code block */}
            <div className="project-mechanics-code">
              <SyntaxHighlighter
                language="csharp"
                style={vscDarkPlus}
                showLineNumbers={true}
                customStyle={{
                  margin: 0,
                  height: "100%",
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                }}
              >
                {m.code}
              </SyntaxHighlighter>
            </div>

            {/* Image */}
            {m.image && (
              <a
                href={m.image}
                target="_blank"
                rel="noopener noreferrer"
                className="project-mechanics-image-link"
              >
                <img
                  src={m.image}
                  alt={m.subtitle}
                  className="project-mechanics-image"
                />
              </a>
            )}

          </div>
        </div>
      ))}
    </div>
  );
}
