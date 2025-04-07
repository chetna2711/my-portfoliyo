import React from "react";
import { projects } from "../data/projects";

function Projects() {
  console.log(projects);
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.project_id}>
              <img src={project.project_img} alt={project.project_title} />
              <h3 className="project-title">{project.project_title}</h3>
              <p className="project-desc">{project.project_desc}</p>
              <div className="tech-stack">
                {project.tech_stacks.map((tech) => (
                  <span>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
