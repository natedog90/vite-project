import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogCard from "./LogCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../App.css";

function Tech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skills, setSkills] = useState({
    sql: 0,
    powerbi: 0,
    react: 0,
    javascript: 0,
  });
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  // Animate skill bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills({
        sql: 85,
        powerbi: 80,
        react: 70,
        javascript: 75,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const sqlExample = `-- SQL Query from United Airlines Project
SELECT 
  customer_id,
  sentiment_score,
  nps_category,
  COUNT(*) as feedback_count
FROM customer_feedback
WHERE survey_date >= '2024-01-01'
GROUP BY customer_id, sentiment_score, nps_category
ORDER BY sentiment_score DESC;`;

  const techStack = [
    { name: "SQL", level: skills.sql, icon: "🗄️", color: "#00758F" },
    { name: "Power BI", level: skills.powerbi, icon: "📊", color: "#F2C811" },
    { name: "React", level: skills.react, icon: "⚛️", color: "#61DAFB" },
    {
      name: "JavaScript",
      level: skills.javascript,
      icon: "💛",
      color: "#F7DF1E",
    },
  ];

  const projects = [
    {
      title: "United Airlines Dashboard",
      description:
        "Built interactive Power BI dashboards tracking customer sentiment and NPS scores.",
      tech: ["SQL", "Power BI", "ERD Design"],
      front: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed this responsive portfolio using React and modern CSS.",
      tech: ["React", "JavaScript", "CSS"],
      front: true,
    },
  ];

  const milestones = [
    {
      title: "Database Design",
      icon: "🗄️",
      description: "Mastered ERD design and SQL",
      color: "#00758F",
    },
    {
      title: "Data Visualization",
      icon: "📊",
      description: "Created interactive dashboards",
      color: "#F2C811",
    },
    {
      title: "Web Development",
      icon: "⚛️",
      description: "Built full-stack applications",
      color: "#61DAFB",
    },
    {
      title: "Problem Solving",
      icon: "💡",
      description: "Technology as a tool for impact",
      color: "#10B981",
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <LogCard />
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

      <div className="page-container">
        <div className="page-content">
          {/* Tech Stack Overview - Now at Top as Expandable Card */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("techstack")}
            >
              <h2>Tech Stack Overview 💻</h2>
              <span className="expand-icon">
                {expandedCard === "techstack" ? "−" : "+"}
              </span>
            </div>
            <p>
              Explore the technologies I've mastered and the milestones I've
              achieved on my technical journey.
            </p>
            {expandedCard === "techstack" && (
              <div className="expanded-content">
                <div className="dashboard-skills-wrapper">
                  {/* Milestones Timeline on Left */}
                  <div className="dashboard-section-left">
                    <h3>Key Milestones</h3>
                    <div className="milestones-timeline">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="milestone-item">
                          <div
                            className="milestone-icon"
                            style={{ backgroundColor: milestone.color }}
                          >
                            {milestone.icon}
                          </div>
                          <div className="milestone-content">
                            <h4>{milestone.title}</h4>
                            <p>{milestone.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Skills on Right */}
                  <div className="skills-section-right">
                    <h3>Technical Skills</h3>
                    <p>Technologies mastered during my journey:</p>
                    <div className="tech-stack-grid">
                      {techStack.map((tech, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-icon">{tech.icon}</span>
                            <span className="skill-name">{tech.name}</span>
                            <span className="skill-percentage">
                              {tech.level}%
                            </span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-fill"
                              style={{
                                width: `${tech.level}%`,
                                backgroundColor: tech.color,
                                transition: "width 1.5s ease-out",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Featured Projects Section with Flip Cards */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("projects")}
            >
              <h2>Featured Projects 🚀</h2>
              <span className="expand-icon">
                {expandedCard === "projects" ? "−" : "+"}
              </span>
            </div>
            <p>Click on any project card to learn more about my work:</p>
            {expandedCard === "projects" && (
              <div className="expanded-content">
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`flip-card ${
                        flippedCards[index] ? "flipped" : ""
                      }`}
                      onClick={() => toggleFlip(index)}
                    >
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <h3>{project.title}</h3>
                          <p className="flip-hint">Click to learn more →</p>
                        </div>
                        <div className="flip-card-back">
                          <p>{project.description}</p>
                          <div className="tech-tags">
                            {project.tech.map((t, i) => (
                              <span key={i} className="tech-tag">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Code Example Section */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("code")}
            >
              <h2>Code in Action 💻</h2>
              <span className="expand-icon">
                {expandedCard === "code" ? "−" : "+"}
              </span>
            </div>
            <p>
              Here's an example of SQL queries I wrote for the United Airlines
              project:
            </p>
            {expandedCard === "code" && (
              <div className="expanded-content">
                <div className="code-container">
                  <SyntaxHighlighter
                    language="sql"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      padding: "1.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {sqlExample}
                  </SyntaxHighlighter>
                </div>
                <div className="mission-grid" style={{ marginTop: "1.5rem" }}>
                  <div className="mission-item">
                    <span className="mission-emoji">🔍</span>
                    <h4>Data Filtering</h4>
                    <p>WHERE clause for date-based filtering</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">📊</span>
                    <h4>Aggregation</h4>
                    <p>GROUP BY for customer insights</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">🎯</span>
                    <h4>Sorting</h4>
                    <p>ORDER BY for priority ranking</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">📈</span>
                    <h4>Analytics</h4>
                    <p>COUNT for feedback metrics</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Technical Growth */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("growth")}
            >
              <h2>Technical Growth 🌱</h2>
              <span className="expand-icon">
                {expandedCard === "growth" ? "−" : "+"}
              </span>
            </div>
            <p>
              My technical journey at i.c.stars transformed me from someone
              curious about technology into a confident problem solver. I
              learned to design ERDs, write complex SQL queries, build
              interactive dashboards, and develop full-stack applications. But
              more importantly, I learned that technology is a tool for impact—a
              way to solve real problems and serve real people.
            </p>
            {expandedCard === "growth" && (
              <div className="expanded-content">
                <blockquote className="reflection-quote">
                  "Technology is powerful, but it's purpose that makes it
                  meaningful."
                </blockquote>
                <ul>
                  <li>📐 Designed complex ERDs for data modeling</li>
                  <li>🔎 Wrote advanced SQL queries for analysis</li>
                  <li>📊 Built interactive Power BI dashboards</li>
                  <li>⚛️ Developed full-stack React applications</li>
                  <li>💡 Learned to solve real-world problems with code</li>
                  <li>🎯 Discovered technology as a tool for impact</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tech;
