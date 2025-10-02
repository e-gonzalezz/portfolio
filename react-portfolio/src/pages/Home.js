const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-section">
          <img 
            src="/images/profile.jpg" 
            alt="Elizabeth Gonzalez" 
            className="profile-photo"
          />
          <div className="hero-text">
            <h1>Hi there, I'm Elizabeth Gonzalez :)⋆˚࿔</h1>
            <p className="hero-subtitle">Researcher | Software Engineer | Game Developer | Open Source Contributor</p>
            <p className="hero-description">
              I'm passionate about creating affordable and creative video games with diverse characters. 
              Currently pursuing Computer Science with a minor in Digital Arts and Sciences.
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="/contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;