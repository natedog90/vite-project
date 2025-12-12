import "./App.css";
import profileImage from "./assets/DSC_4789.jpg";
import galleryImage from "./assets/DSC_0187 (1).jpg";
import galleryImage2 from "./assets/PSX_20200409_033252_resized_1_01.jpg";
import galleryImage3 from "./assets/DSC_1492_1-01.jpeg";
import galleryImage4 from "./assets/DSC_0060.jpg";
import LogCard from "./components/LogCard";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LogCard />
      <nav className="navbar-clean">
        <button
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect x="4" y="7" width="22" height="3" rx="1.5" fill="white" />
            <rect x="4" y="13.5" width="22" height="3" rx="1.5" fill="white" />
            <rect x="4" y="20" width="22" height="3" rx="1.5" fill="white" />
          </svg>
        </button>
        <h1 className="signature-name">Nathan Jimenez</h1>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
      </nav>

      {/* Side Panel Menu */}
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
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="container">
        <aside className="sidebar">
          <img
            className="profile-img"
            src={profileImage}
            alt="Nathan Jimenez"
            loading="eager"
            decoding="async"
          />
          <h1>About Me</h1>
          <p>
            "My name is Nathan, and I am currently serving as an intern with IC
            Stars in Chicago. My responsibilities include learning key concepts
            in business analysis, project management, and technology
            implementation, while also building interpersonal and leadership
            skills essential for success in the tech industry.I bring a diverse
            skill set that includes strong customer service abilities, a talent
            for teamwork, and effective communication skills honed through my
            background in customer-focused roles."
          </p>
        </aside>

        <main className="main-content">
          <h2 id="main-title">Welcome to my website</h2>

          <div id="dev-log">
            <div className="content-card">
              <h2>About This Portfolio</h2>
              <p>
                I created this website to highlight the skills and knowledge I
                developed during my time at IC Stars, defined in 5 key
                categories: Business, Leadership, Wellness, Career Planning, and
                Technology. Each section showcases the growth I've experienced
                throughout my internship journey.
              </p>
            </div>

            <div className="content-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <h2 style={{ margin: 0 }}>My Photography</h2>
                <Link to="/gallery" className="arrow-button">
                  <span>View Gallery</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p>
                Beyond technology, I'm passionate about photography. The gallery
                features a curated selection of my work—moments I've captured
                throughout the years. I invite you to explore and enjoy the
                collection.
              </p>
            </div>

            <aside className="gallery-preview">
              <img
                src={galleryImage}
                alt="Gallery preview"
                className="preview-img"
                loading="lazy"
                decoding="async"
              />
              <img
                src={galleryImage2}
                alt="Gallery preview 2"
                className="preview-img"
                loading="lazy"
                decoding="async"
              />
              <img
                src={galleryImage3}
                alt="Gallery preview 3"
                className="preview-img"
                loading="lazy"
                decoding="async"
              />
              <img
                src={galleryImage4}
                alt="Gallery preview 4"
                className="preview-img"
                loading="lazy"
                decoding="async"
              />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
