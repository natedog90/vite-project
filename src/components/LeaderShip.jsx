import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Leadership() {
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
        <h1 className="page-header">Leadership</h1>
        <div className="page-content">
          <h2>Team Week</h2>
          <p>
            Team Week was the spark. Meeting my cohort, being assigned teams,
            and diving into a United Airlines project showed me how
            collaboration and resilience can turn challenges into growth.
          </p>

          <h2>Tea Host</h2>
          <p>
            As Tea Host, I learned the power of connection. Hosting industry
            professionals wasn't just networking—it was about listening, sharing
            our journeys, and realizing that our voices matter.
          </p>

          <h2>Cohort Soundtrack</h2>
          <p>
            One of my proudest moments was creating a soundtrack for our cohort.
            Each song represented someone's story, and together it became a
            celebration of unity, creativity, and encouragement.
          </p>

          <h2>My Mission</h2>
          <p>
            Through it all, I lived my mission: to love. My gifts—empathy,
            communication, patience, creativity, and encouragement—weren't just
            words on paper. They became actions: listening to teammates,
            speaking with clarity, staying calm under pressure, creating
            something meaningful, and lifting others up.
          </p>

          <h2>Closing</h2>
          <p>
            i.c.stars wasn't just an internship—it was transformation. I leave
            with gratitude, stronger leadership, and a renewed commitment to
            lead with compassion, inspire with creativity, and encourage others
            to see their own potential.
          </p>
        </div>
      </div>
    </>
  );
}

export default Leadership;
