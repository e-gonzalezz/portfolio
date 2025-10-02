const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>🚀 About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer and game enthusiast with a mission to create 
              affordable and creative video games featuring diverse characters and teams.
            </p>
            <div className="current-focus">
              <h3>💡 Currently Exploring:</h3>
              <ul>
                <li>Minecraft modding</li>
                <li>Full-stack development</li>
                <li>3D modeling</li>
              </ul>
            </div>
            <p className="fun-fact">
              ⚡ <strong>Fun fact:</strong> I love concerts - I've been to 20 so far!
            </p>
          </div>
          <div className="skills">
            <h3>💬 Ask me about:</h3>
            <div className="skill-tags">
              <span>C++</span>
              <span>Gaming</span>
              <span>Video Editing</span>
              <span>Game Development</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;