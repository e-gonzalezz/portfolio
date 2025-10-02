const Projects = () => {
  const projects = [
    {
      title: "Skill Roulette",
      description: "🔭 Currently working on this exciting project!",
      status: "In Development",
      tech: ["Game Development"],
      github: "your-github-link",
    },
    // Add more projects as you build them
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.status && <span className="status">{project.status}</span>}
              <div className="tech-stack">
                {project.tech.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
              </div>
              {project.github && (
                <a href={project.github} className="project-link">View on GitHub</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;