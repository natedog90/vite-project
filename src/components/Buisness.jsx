import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Business() {
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
        <h1 className="page-header">Business</h1>
        <div className="page-content">
          <h2>United Airlines Project</h2>
          <p>
            During my internship, one of the most impactful experiences was our
            project with United Airlines. We built SQL queries, designed visuals
            in Power BI, and learned how to structure ERDs to make sense of
            complex data. Together, we created an app that aggregated customer
            data into a centralized platform—turning raw information into
            actionable insights. By tracking trends in NPS scores and sentiment,
            we helped United better understand customer needs and identify
            opportunities for improvement.
          </p>

          <h2>Learning and Growth</h2>
          <p>
            This project wasn't just about technology—it was about teamwork and
            mentorship. I learned how collaboration fuels innovation, how
            mentors guide us through challenges, and how persistence turns
            obstacles into breakthroughs. Every line of SQL, every dashboard,
            and every design decision was a chance to grow as both a
            technologist and a leader.
          </p>

          <h2>Industry Exposure</h2>
          <p>
            Visiting companies like Salesforce and Accenture gave me a broader
            perspective. I saw firsthand how industry leaders approach data,
            innovation, and customer experience. Those visits reminded me that
            the skills we're building aren't just classroom exercises—they're
            the foundation for solving real-world problems at scale.
          </p>

          <h2>Closing Reflection</h2>
          <p>
            This business experience taught me that technology is powerful, but
            it's people—teams, mentors, and communities—that make it meaningful.
            I leave i.c.stars with confidence in my technical skills, gratitude
            for the mentorship I've received, and a vision to use data and
            creativity to drive solutions that truly serve people.
          </p>
        </div>
      </div>
    </>
  );
}

export default Business;
