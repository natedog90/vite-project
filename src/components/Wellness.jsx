import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Wellness() {
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
        <h1 className="page-header">Wellness</h1>
        <div className="page-content">
          <h2>Financial Mindfulness</h2>
          <p>
            During this cycle, I learned that wellness is just as important as
            technical growth. I became more mindful of my spending patterns,
            recognizing how stress influenced my choices, and began aligning my
            financial decisions with my long-term goals.
          </p>
          <p>
            My financial goal is simple: to be able to take care of myself and
            my family. I don't need much, and I don't need to become rich. What
            matters most is stability, security, and the ability to provide. At
            the end of the day, my health is my wealth—and that's the foundation
            I want to build on.
          </p>

          <h2>Physical Wellness</h2>
          <p>
            To manage the mental and physical demands, I committed to the gym
            and regular sauna sessions. The sauna became more than relaxation—it
            helped relieve stress, improved circulation, cleared my mind, and
            gave me better sleep. Together with exercise, it kept me grounded
            and focused.
          </p>

          <h2>Mental Health & Self-Talk</h2>
          <p>
            There were moments when the workload felt overwhelming. I wrote
            about those challenges in my journal, and that practice reminded me
            that vulnerability is part of growth. I also confronted negative
            self-talk and imposter syndrome by reframing my thoughts. Instead of
            telling myself "I'm not good enough," I reminded myself, "I'm
            learning, and growth takes time."
          </p>

          <h2>Affirmations</h2>
          <p>
            I strengthened this mindset with affirmations: I am capable of
            learning and growing every day. My effort matters as much as the
            outcome. I belong in spaces where I bring value.
          </p>

          <h2>Closing</h2>
          <p>
            This wellness journey taught me that resilience isn't just about
            pushing through—it's about caring for myself, challenging doubt, and
            choosing progress over perfection.
          </p>
        </div>
      </div>
    </>
  );
}

export default Wellness;
