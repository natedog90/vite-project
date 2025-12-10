import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LogCard />
      <nav className="navbar">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              home
            </Link>
          </li>
          <li>
            <Link to="/leadership" onClick={toggleMenu}>
              leadership
            </Link>
          </li>
          <li>
            <Link to="/business" onClick={toggleMenu}>
              business
            </Link>
          </li>
          <li>
            <Link to="/tech" onClick={toggleMenu}>
              tech
            </Link>
          </li>
          <li>
            <Link to="/wellness" onClick={toggleMenu}>
              wellness
            </Link>
          </li>
          <li>
            <Link to="/career-planning" onClick={toggleMenu}>
              career planning
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={toggleMenu}>
              resume
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              linked in
            </a>
          </li>
        </ul>
      </nav>
      <div className="page-container">
        <h1 className="page-header">Gallery</h1>
        <div className="page-content">
          {/* Add your gallery content here */}
          <p>Welcome to My Gallery</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
