import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import profilePhoto from "../assets/profile-photo.jpg";
import "../App.css";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LogCard />
      <button
        className="hamburger-icon-home"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="7" width="22" height="3" rx="1.5" fill="white" />
          <rect x="4" y="13.5" width="22" height="3" rx="1.5" fill="white" />
          <rect x="4" y="20" width="22" height="3" rx="1.5" fill="white" />
        </svg>
      </button>

      <div className={`side-panel ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="side-panel-content">
          <Link to="/" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">🏠</span>
            Home
          </Link>
          <Link to="/leadership" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">👑</span>
            Leadership
          </Link>
          <Link to="/business" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">💼</span>
            Business
          </Link>
          <Link to="/tech" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">💻</span>
            Tech
          </Link>
          <Link to="/wellness" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">🌱</span>
            Wellness
          </Link>
          <Link
            to="/career-planning"
            onClick={toggleMenu}
            className="panel-link"
          >
            <span className="link-icon">🎯</span>
            Career Planning
          </Link>
          <Link to="/resume" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">📄</span>
            Resume
          </Link>
          <Link to="/gallery" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">📸</span>
            Gallery
          </Link>
        </div>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nathan Jimenez</span>
            </h1>
            <p className="hero-subtitle">
              Aspiring Data Analyst | Business Strategist | Creative Problem
              Solver
            </p>
            <div className="cta-buttons">
              <Link to="/resume" className="cta-button primary">
                View Resume
              </Link>
              <div className="profile-photo-container">
                <img
                  src={profilePhoto}
                  alt="Nathan Jimenez"
                  className="profile-photo"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/Nathan-Jimenez-77"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="section-grid">
          <Link to="/leadership" className="category-card leadership">
            <div className="card-icon">👑</div>
            <h2>Leadership</h2>
            <p>
              Discover my journey as a leader at i.c.stars, where I learned to
              inspire teams and drive change.
            </p>
          </Link>

          <Link to="/business" className="category-card business">
            <div className="card-icon">💼</div>
            <h2>Business</h2>
            <p>
              Explore my experience with United Airlines, building dashboards
              and solving real-world problems.
            </p>
          </Link>

          <Link to="/tech" className="category-card tech">
            <div className="card-icon">💻</div>
            <h2>Tech</h2>
            <p>
              See how I use SQL, Power BI, and React to turn data into
              actionable insights.
            </p>
          </Link>

          <Link to="/wellness" className="category-card wellness">
            <div className="card-icon">🌱</div>
            <h2>Wellness</h2>
            <p>
              Learn about my commitment to mental health, self-care, and
              creating balanced communities.
            </p>
          </Link>

          <Link to="/career-planning" className="category-card career">
            <div className="card-icon">🎯</div>
            <h2>Career Planning</h2>
            <p>
              Explore my professional roadmap, goals, and strategic vision for
              my future career path.
            </p>
          </Link>

          <Link to="/gallery" className="category-card gallery">
            <div className="card-icon">📸</div>
            <h2>Gallery</h2>
            <p>
              View my photography portfolio capturing moments from Chicago and
              beyond through my lens.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
