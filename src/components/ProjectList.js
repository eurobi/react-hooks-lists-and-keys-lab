import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((project) => {
  return (
    <ProjectItem technologies={project.technologies} key={project.id} name={project.name} about={project.about}></ProjectItem>
  )
  }
  )

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
