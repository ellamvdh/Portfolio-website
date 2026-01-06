import { Link } from "react-router-dom";


export default function ProjectCard({ project, highlight }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={`group block bg-(--surface) rounded-lg overflow-hidden border border-(--bordercolor) hover:border-(--accent) transition-all duration-300 ${
        highlight ? "highlight-card" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${highlight ? "" : "aspect-video"}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className={highlight ? "p-2" : "p-4"}>
        <h3
          className={
            highlight
              ? "text-sm font-semibold mb-1"
              : "text-lg font-semibold mb-1 group-hover:text-(--accent) transition-colors"
          }
        >
          {project.title}
        </h3>
        <p className={highlight ? "text-xs text-(--muted) line-clamp-2" : "text-sm text-(--muted) line-clamp-2"}>
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
