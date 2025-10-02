const Projects = () => {
  const projects = [
    {
      title: "Skill Roulette",
      description: "A full-stack social platform where users spin a daily roulette wheel for tasks, share media of completions, and engage through follower reactions. Built with modern web technologies and responsive design.",
      status: "In Development",
      timeline: "September 2025 - Present",
      tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js", "CSS"],
      details: [
        "Designed backend services with Express.js and MongoDB for user accounts, task generation, and media storage",
        "Developed responsive front-end with dynamic task displays and interactive user feeds",
        "Implemented media upload features and social engagement systems"
      ],
      github: "https://github.com/Warnocke/Skill-Roulette",
      category: "Full-Stack Development"
    },
    {
      title: "DragonHeart",
      description: "A 2D pixel platformer game developed in Unity using C#. Features custom gameplay systems, diverse enemy AI, and hand-crafted pixel art assets with engaging narrative elements.",
      status: "In Development",
      timeline: "July 2025 - Present",
      tech: ["Unity", "C#", "Game Design", "Pixel Art"],
      details: [
        "Implemented core gameplay systems including movement, collision detection, and level progression",
        "Engineered custom weapon system and diverse enemy AI behaviors (stationary, chasing, turret)",
        "Designed and programmed final boss encounter with balanced gameplay mechanics",
        "Created all pixel art assets and integrated narrative elements"
      ],
      github: "https://github.com/e-gonzalezz/dragonheart",
      category: "Game Development"
    },
    {
      title: "Michelin Munch",
      description: "A Michelin Guide restaurant discovery system built in C++ with custom data structures. Organizes 17,000+ restaurants hierarchically by city, star rating, and price using efficient algorithms.",
      status: "Completed",
      timeline: "March 2025 - April 2025",
      tech: ["C++", "Data Structures", "Algorithms", "File I/O"],
      details: [
        "Designed and implemented custom Separate Chaining and Open Addressing hashmaps from scratch",
        "Parsed and normalized a 17,000+ row Michelin Guide dataset from Kaggle",
        "Organized restaurant data hierarchically by city → star rating → price",
        "Collaborated with team members to optimize search and retrieval performance"
      ],
      github: "https://github.com/arjunmalkani/MichelinMunch",
      category: "Data Structures"
    },
    {
      title: "Minesweeper",
      description: "A classic Minesweeper game implementation with modern UI/UX design. Features customizable difficulty levels, clean interface, and smooth gameplay mechanics built from scratch.",
      status: "Completed",
      timeline: "2024",
      tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
      details: [
        "Implemented classic Minesweeper game logic with recursive flood-fill algorithm",
        "Designed clean, intuitive user interface with responsive design",
        "Added multiple difficulty levels and customizable game settings",
        "Built efficient mine placement and cell reveal algorithms"
      ],
      github: "https://github.com/e-gonzalezz/Minesweeper",
      category: "Game Development"
    }
  ];

  return (
    <main className="page-content">
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-timeline">{project.timeline}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <ul>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-status">
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;