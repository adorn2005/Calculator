import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "SIMPLE CALCULATOR",
    tech: "VS CODE",
    description: "A SIMPLE CALCULATOR.",
  },
  {
    title: "MY PORTFOLIO",
    tech: "MERN STACK",
    description: "SHOWS MY PERSONAL BIODATA.",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="card" key={idx}>
            <h3>{proj.title}</h3>
            <span>{proj.tech}</span>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;