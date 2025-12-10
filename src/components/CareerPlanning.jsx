import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function CareerPlanning() {
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
        <h1 className="page-header">Career Planning</h1>
        <div className="page-content">
          <h2>Personal Brand & Values</h2>
          <p>
            When I think about my career path, I start with my personal brand.
            My values are integrity, loyalty, consistency, and reliability.
            These are the qualities I want people to see in me, whether I'm
            working on a project, leading a team, or supporting my family.
          </p>

          <h2>Career Goals</h2>
          <p>
            In terms of roles, I'm most interested in cyber security and data
            analytics. My short-term goal is to keep building my technical
            foundation—strengthening my skills in SQL, Power BI, React, and
            cloud services. My long-term goal is to become a master at my craft,
            someone who can not only solve problems but also innovate solutions
            that make a real impact.
          </p>
          <p>
            Beyond technical roles, I see myself growing into leadership and
            possibly entrepreneurial opportunities. I want to use my skills not
            just to analyze data, but to guide teams, consult with businesses,
            and help organizations make smarter decisions.
          </p>

          <h2>Professionalism & Mentorship</h2>
          <p>
            I've also learned a lot from Jessie and Brandies. Jessie taught us
            career devolopement, while brandie our program manager taught us the
            buisness apect and how to be professional. Their mentorship showed
            me that professionalism isn't just about appearance it's about
            preparation, communication, and consistency.
          </p>

          <h2>Industry Workshops</h2>
          <p>
            The workshops with Accenture, Capital One, Salesforce, and other
            employer partners gave me valuable insights into how industry
            leaders approach technology and business. They reminded me that the
            skills we're building at i.c.stars are directly connected to the
            challenges companies face every day.
          </p>

          <h2>Job Search Preparation</h2>
          <p>
            Finally, resume feedback and job-search preparation have been
            critical. I've learned how to present my skills clearly, how to
            highlight my experiences, and how to position myself for the
            opportunities I want.
          </p>

          <h2>Looking Ahead</h2>
          <p>
            Looking ahead, I see a path that combines technical mastery,
            leadership, and consulting. I want to keep growing, keep learning,
            and keep building a career that reflects my values and creates
            impact.
          </p>
        </div>
      </div>
    </>
  );
}

export default CareerPlanning;
