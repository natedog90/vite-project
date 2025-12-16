import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Menu,
  X,
  Home as HomeIcon,
  Crown,
  Briefcase,
  Code,
  Heart,
  Target,
  FileText,
  Camera,
  Database,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";
import "../App.css";

function Tech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skills, setSkills] = useState({
    sql: 0,
    powerBI: 0,
    react: 0,
    javascript: 0,
  });
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCard = (cardName) => {
    const newExpandedCard = expandedCard === cardName ? null : cardName;
    setExpandedCard(newExpandedCard);

    // Reset and animate skills when tech-overview card is opened
    if (cardName === "tech-overview" && newExpandedCard === "tech-overview") {
      setSkills({
        sql: 0,
        powerBI: 0,
        react: 0,
        javascript: 0,
      });

      setTimeout(() => {
        setSkills({
          sql: 75,
          powerBI: 60,
          react: 65,
          javascript: 45,
        });
      }, 100);
    }
  };

  const techSkills = [
    { name: "SQL", level: skills.sql, icon: "◆", color: "#3B82F6" },
    { name: "Power BI", level: skills.powerBI, icon: "■", color: "#F59E0B" },
    { name: "React", level: skills.react, icon: "●", color: "#EF4444" },
    {
      name: "JavaScript",
      level: skills.javascript,
      icon: "▲",
      color: "#8B5CF6",
    },
  ];

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
      <button
        className="hamburger-icon"
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

      <div className="page-container">
        <div className="page-header">
          <h1 className="page-hero-title">
            <span className="highlight">Technical Excellence</span>
          </h1>
        </div>

        <div className="page-content">
          {/* Tech Stack Overview - Interactive Card */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("tech-overview")}
            >
              <h2>Tech Stack Overview</h2>
              <span className="expand-icon">
                {expandedCard === "tech-overview" ? "−" : "+"}
              </span>
            </div>
            <p>
              A comprehensive view of my technical skills, including proficiency
              levels in SQL, Power BI, Excel, and React.
            </p>
            {expandedCard === "tech-overview" && (
              <div className="expanded-content">
                <div className="tech-stack-grid">
                  {techSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <div
                          className="skill-icon"
                          style={{
                            backgroundColor: `${skill.color}33`,
                            border: `2px solid ${skill.color}`,
                          }}
                        >
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Featured Projects */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("projects")}
            >
              <h2>Featured Projects</h2>
              <span className="expand-icon">
                {expandedCard === "projects" ? "−" : "+"}
              </span>
            </div>
            <p>
              Click on each project card to see more details and technologies
              used as i continue my tech journey i will be adding more to
              showcase.
            </p>
            {expandedCard === "projects" && (
              <div className="expanded-content">
                <div className="flip-cards-container">
                  {/* United Airlines Dashboard Card */}
                  <div
                    className={`flip-card ${
                      flippedCards.united ? "flipped" : ""
                    }`}
                    onClick={() => toggleFlip("united")}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h3>► United Airlines Dashboard</h3>
                        <p>Interactive Power BI analytics platform</p>
                        <span className="flip-hint">
                          Click to see details →
                        </span>
                      </div>
                      <div className="flip-card-back">
                        <h3>Technologies Used</h3>
                        <ul>
                          <li>■ Power BI</li>
                          <li>◆ SQL Server</li>
                          <li>▲ DAX</li>
                          <li>● ETL Processes</li>
                        </ul>
                        <p className="project-description">
                          Built comprehensive dashboards tracking customer
                          sentiment and NPS scores, integrating multiple data
                          sources.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Website Card */}
                  <div
                    className={`flip-card ${
                      flippedCards.portfolio ? "flipped" : ""
                    }`}
                    onClick={() => toggleFlip("portfolio")}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h3>◆ Portfolio Website</h3>
                        <p>Modern React-based personal portfolio</p>
                        <span className="flip-hint">
                          Click to see details →
                        </span>
                      </div>
                      <div className="flip-card-back">
                        <h3>Technologies Used</h3>
                        <ul>
                          <li>● React</li>
                          <li>★ CSS3</li>
                          <li>► React Router</li>
                          <li>◇ Responsive Design</li>
                        </ul>
                        <p className="project-description">
                          Interactive portfolio showcasing my journey in tech,
                          leadership, and personal growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Power BI Report Embed */}
                <div className="powerbi-embed-container">
                  <h3
                    style={{
                      color: "white",
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                  >
                    📊 Innovation Dashboard
                  </h3>
                  <div className="powerbi-iframe-wrapper">
                    <iframe
                      title="innovate"
                      width="100%"
                      height="541.25"
                      src="https://app.powerbi.com/reportEmbed?reportId=0daf3311-3399-4781-b328-b2cd8f2bc6bf&autoAuth=true&ctid=88227c99-d157-4dbe-8e33-d8b3fcc29577"
                      frameBorder="0"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
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
              <h2>Code in Action</h2>
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
                <div className="mission-grid">
                  <div className="mission-item">
                    <span className="mission-emoji">◆</span>
                    <h4>Data Filtering</h4>
                    <p>Extracting relevant information using WHERE clauses</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">Σ</span>
                    <h4>Aggregation</h4>
                    <p>Summarizing data with SUM, AVG, COUNT functions</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">∞</span>
                    <h4>Joins</h4>
                    <p>Combining multiple tables for comprehensive analysis</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">✓</span>
                    <h4>Data Validation</h4>
                    <p>Ensuring accuracy and consistency in results</p>
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
              <h2>Technical Growth</h2>
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
                  <li>◆ Designed complex ERDs for data modeling</li>
                  <li>● Wrote advanced SQL queries for analysis</li>
                  <li>■ Built interactive Power BI dashboards</li>
                  <li>◇ Developed full-stack React applications</li>
                  <li>★ Learned to solve real-world problems with code</li>
                  <li>► Discovered technology as a tool for impact</li>
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
