import { useParams } from "react-router-dom";
import projectData from "../data/projectdata.json";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";

export default function ProjectPage() {
  const { projectId } = useParams();

  // Only one project data source
  const allProjects = projectData.projects;

  // Find clicked project
  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Project niet gevonden
      </div>
    );
  }

  // Previous & next projects (looping)
  const currentIndex = allProjects.findIndex(p => p.id === projectId);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1;
  const nextIndex = currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0;

  const previousProject = {
    title: allProjects[previousIndex].title,
    url: `/projects/${allProjects[previousIndex].id}`
  };

  const nextProject = {
    title: allProjects[nextIndex].title,
    url: `/projects/${allProjects[nextIndex].id}`
  };

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectInfo project={project} />
      <ProjectMechanics project={project} />
      <ProjectGallery project={project} />
      <ProjectPrevNext previous={previousProject} next={nextProject} />
    </div>
  );
}
