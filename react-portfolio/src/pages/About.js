const About = () => {
  return (
    <main className="page-content">
      <section className="about">
        <div className="container">
          <h2>🚀 About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="intro-section">
                <p>
                  I'm a passionate developer and game enthusiast with a mission to create 
                  affordable and creative video games featuring diverse characters and teams. 
                  Currently pursuing my Bachelor's degree in Computer Science with a minor in 
                  Digital Arts and Sciences at the University of Florida with a 3.82 GPA.
                </p>
              </div>

              <div className="experience-section">
                <h3>💼 Current Experience</h3>
                <div className="experience-item">
                  <h4>Research Assistant - University of Florida</h4>
                  <p>Conducting research on AI-assisted learning tools to help students improve problem-solving strategies and identify common mistakes during practice settings.</p>
                </div>
              </div>

              <div className="current-focus">
                <h3>💡 What I'm Currently Exploring:</h3>
                <ul>
                  <li><strong>Minecraft Modding:</strong> Creating custom game experiences</li>
                  <li><strong>Full-stack Development:</strong> Building complete web applications with React and Node.js</li>
                  <li><strong>3D Modeling:</strong> Bringing digital worlds to life</li>
                  <li><strong>Game Development:</strong> Working on DragonHeart, my 2D pixel platformer</li>
                </ul>
              </div>

              <div className="leadership-section">
                <h3>🎬 Leadership & Creative Work</h3>
                <p>
                  As Historian-Videographer for Women in Computer Science and Engineering (WiCSE), 
                  I've produced engaging promotional content using Adobe After Effects, achieving 
                  over <strong>16,000 views</strong> and significantly boosting our organization's visibility.
                </p>
              </div>

              <div className="fun-facts">
                <h3>⚡ Fun Facts About Me</h3>
                <ul>
                  <li>I've been to <strong>20 concerts</strong> and counting! 🎵</li>
                  <li>I speak both <strong>English and Spanish</strong> fluently</li>
                  <li>Ask me about <strong>C++, gaming, or video editing!</strong></li>
                  <li>I love combining technical skills with creative arts</li>
                </ul>
              </div>
            </div>

            <div className="skills-section">
              <h3>💻 Technical Skills</h3>
              <div className="skills-category">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <span>C++</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>C#</span>
                  <span>HTML/CSS</span>
                  <span>MATLAB</span>
                </div>
              </div>

              <div className="skills-category">
                <h4>Technologies & Frameworks</h4>
                <div className="skill-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>Unity</span>
                  <span>Git</span>
                </div>
              </div>

              <div className="skills-category">
                <h4>Creative Tools</h4>
                <div className="skill-tags">
                  <span>Adobe After Effects</span>
                  <span>Adobe Photoshop</span>
                  <span>Video Editing</span>
                  <span>Game Design</span>
                </div>
              </div>

              <div className="education">
                <h3>🎓 Education</h3>
                <div className="education-item">
                  <h4>University of Florida</h4>
                  <p>Bachelor of Science in Computer Science</p>
                  <p>Minor in Digital Arts and Sciences</p>
                  <p className="gpa">GPA: 3.82/4.0</p>
                  <p className="timeline">Expected Graduation: May 2027</p>
                  <div className="coursework">
                    <h5>Relevant Coursework:</h5>
                    <p>Data Structures & Algorithms • Computer Organization • Linear Algebra • Intro to Game Development • Intro to Software Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;