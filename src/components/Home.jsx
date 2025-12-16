import { Link } from "react-router-dom";
import { useState } from "react";
import profilePhoto from "../assets/profile-photo.jpg";
import {
  Crown,
  Briefcase,
  Code,
  Heart,
  Target,
  Camera,
  Menu,
  X,
  Home as HomeIcon,
  FileText,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import "../App.css";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileFlip = () => {
    setIsProfileFlipped(!isProfileFlipped);
  };

  return (
    <>
      <button
        className="hamburger-icon-home"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span style={{ fontSize: "2rem" }}>🍔</span>
      </button>

      <div className={`side-panel ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} color="white" />
        </button>
        <div className="side-panel-content">
          <Link to="/" onClick={toggleMenu} className="panel-link">
            <HomeIcon size={24} />
            Home
          </Link>
          <Link to="/leadership" onClick={toggleMenu} className="panel-link">
            <Crown size={24} />
            Leadership
          </Link>
          <Link to="/business" onClick={toggleMenu} className="panel-link">
            <Briefcase size={24} />
            Business
          </Link>
          <Link to="/tech" onClick={toggleMenu} className="panel-link">
            <Code size={24} />
            Tech
          </Link>
          <Link to="/wellness" onClick={toggleMenu} className="panel-link">
            <Heart size={24} />
            Wellness
          </Link>
          <Link
            to="/career-planning"
            onClick={toggleMenu}
            className="panel-link"
          >
            <Target size={24} />
            Career Planning
          </Link>
          <Link to="/resume" onClick={toggleMenu} className="panel-link">
            <FileText size={24} />
            Resume
          </Link>
          <Link to="/gallery" onClick={toggleMenu} className="panel-link">
            <Camera size={24} />
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
                <div
                  className={`profile-flip-card ${
                    isProfileFlipped ? "flipped" : ""
                  }`}
                >
                  <div className="profile-flip-card-inner">
                    <div className="profile-flip-card-front">
                      <img
                        src={profilePhoto}
                        alt="Nathan Jimenez"
                        className="profile-photo"
                      />
                    </div>
                    <div className="profile-flip-card-back">
                      <h3>Welcome!</h3>
                      <p>
                        This site shares my journey at{" "}
                        <strong>I.C. Stars</strong>—a blend of growth, learning,
                        and creativity.
                      </p>
                      <p>Explore and discover my experiences!</p>
                    </div>
                  </div>
                </div>
                <button
                  className="flip-cta-button"
                  onClick={toggleProfileFlip}
                  aria-label="About Me"
                >
                  <span>About my site</span>
                  <ArrowRight
                    size={16}
                    style={{
                      transform: isProfileFlipped
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              </div>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <Linkedin size={20} style={{ marginRight: "0.5rem" }} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="section-grid">
          <Link to="/leadership" className="category-card leadership">
            <Crown size={56} className="card-icon-svg" />
            <h2>Leadership</h2>
            <p>
              Discover my journey as a leader at i.c.stars, where I learned to
              inspire teams and drive change.
            </p>
          </Link>

          <Link to="/business" className="category-card business">
            <Briefcase size={56} className="card-icon-svg" />
            <h2>Business</h2>
            <p>
              Explore my experience with United Airlines, building dashboards
              and solving real-world problems.
            </p>
          </Link>

          <Link to="/tech" className="category-card tech">
            <Code size={56} className="card-icon-svg" />
            <h2>Tech</h2>
            <p>
              See how I use SQL, Power BI, and React to turn data into
              actionable insights.
            </p>
          </Link>

          <Link to="/wellness" className="category-card wellness">
            <Heart size={56} className="card-icon-svg" />
            <h2>Wellness</h2>
            <p>
              Learn about my commitment to mental health, self-care, and
              creating balanced communities.
            </p>
          </Link>

          <Link to="/career-planning" className="category-card career">
            <Target size={56} className="card-icon-svg" />
            <h2>Career Planning</h2>
            <p>
              Explore my professional roadmap, goals, and strategic vision for
              my future career path.
            </p>
          </Link>

          <Link to="/gallery" className="category-card gallery">
            <Camera size={56} className="card-icon-svg" />
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
