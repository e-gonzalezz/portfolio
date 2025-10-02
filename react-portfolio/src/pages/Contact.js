const Contact = () => {
  return (
    <main className="page-content">
      <section className="contact">
        <div className="container">
          <h2>Let's Connect!</h2>
          <p className="contact-intro">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just chat about technology and game development. Let's create something amazing together!
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-methods">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:elyglez05@outlook.com">elyglez05@outlook.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">🏫</span>
                  <div>
                    <h4>University</h4>
                    <p>University of Florida</p>
                    <p>Computer Science Student</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">🌟</span>
                  <div>
                    <h4>Interests</h4>
                    <p>Game Development, Full-Stack Web Development, AI Research</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h3>📄 Resume</h3>
              <div className="resume-container">
                <div className="resume-info">
                  <p>Download my latest resume to learn more about my experience and skills.</p>
                  <a href="/resume/Elizabeth_Gonzalez_Resume.pdf" download className="resume-btn">
                    <span className="resume-icon">⬇️</span>
                    Download Resume
                  </a>
                </div>
                
                <div className="resume-preview">
                  <div className="resume-placeholder">
                    <span className="doc-icon">📋</span>
                    <p>Resume Preview</p>
                    <small>PDF Document</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Find Me Online</h3>
            <div className="social-grid">
              <a href="https://github.com/e-gonzalezz" target="_blank" rel="noopener noreferrer" className="social-btn github">
                <span className="social-icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <p>@e-gonzalezz</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/elizabethgonzalez" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                <span className="social-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Elizabeth Gonzalez</p>
                </div>
              </a>
              
              <a href="mailto:elyglez05@outlook.com" className="social-btn email">
                <span className="social-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>egonzalez4@ufl.edu</p>
                </div>
              </a>
            </div>
          </div>

          <div className="availability">
            <h3>🚀 Current Status</h3>
            <div className="status-card">
              <div className="status-indicator available"></div>
              <div className="status-text">
                <h4>Available for Opportunities</h4>
                <p>I'm currently open to internships, research opportunities, and exciting projects in software development and game development!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;