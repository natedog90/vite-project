import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function CareerPlanning() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
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
        <div className="page-header">
          <h1 className="page-hero-title">
            <span className="highlight">Career Planning</span>
          </h1>
        </div>

        <div className="page-content">
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("brand")}
            >
              <h2>Personal Brand & Values 💎</h2>
              <span className="expand-icon">
                {expandedCard === "brand" ? "−" : "+"}
              </span>
            </div>
            <p>
              When I think about my career path, I start with my personal brand.
              My values are integrity, loyalty, consistency, and reliability.
              These are the qualities I want people to see in me, whether I'm
              working on a project, leading a team, or supporting my family.
            </p>
            {expandedCard === "brand" && (
              <div className="expanded-content">
                <div className="mission-grid">
                  <div className="mission-item">
                    <span className="mission-emoji">🛡️</span>
                    <h4>Integrity</h4>
                    <p>Doing the right thing, even when no one is watching</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">🤝</span>
                    <h4>Loyalty</h4>
                    <p>Standing by my team, family, and commitments</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">📊</span>
                    <h4>Consistency</h4>
                    <p>Showing up and delivering quality work every day</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">✅</span>
                    <h4>Reliability</h4>
                    <p>Being someone others can count on</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("goals")}
            >
              <h2>Career Goals 🎯</h2>
              <span className="expand-icon">
                {expandedCard === "goals" ? "−" : "+"}
              </span>
            </div>
            <p>
              In terms of roles, I'm most interested in cyber security and data
              analytics. My short-term goal is to keep building my technical
              foundation—strengthening my skills in SQL, Power BI, React, and
              cloud services. My long-term goal is to become a master at my
              craft, someone who can not only solve problems but also innovate
              solutions that make a real impact.
            </p>
            <p>
              Beyond technical roles, I see myself growing into leadership and
              possibly entrepreneurial opportunities. I want to use my skills
              not just to analyze data, but to guide teams, consult with
              businesses, and help organizations make smarter decisions.
            </p>
            {expandedCard === "goals" && (
              <div className="expanded-content">
                <h3>Short-Term Goals (1-2 Years)</h3>
                <ul>
                  <li>
                    🔐 Master cybersecurity fundamentals and obtain relevant
                    certifications
                  </li>
                  <li>
                    📊 Strengthen SQL, Power BI, and data visualization skills
                  </li>
                  <li>⚛️ Build production-ready applications with React</li>
                  <li>
                    ☁️ Gain hands-on experience with cloud platforms (AWS/Azure)
                  </li>
                  <li>
                    💼 Secure a role as a Data Analyst or Junior Developer
                  </li>
                </ul>

                <h3>Long-Term Goals (5+ Years)</h3>
                <ul>
                  <li>
                    🏆 Become a recognized expert in data analytics and
                    cybersecurity
                  </li>
                  <li>
                    👔 Transition into leadership roles (Team Lead, Manager)
                  </li>
                  <li>
                    💡 Launch consulting services to help businesses leverage
                    data
                  </li>
                  <li>🚀 Potentially start my own tech venture</li>
                  <li>🎓 Mentor the next generation of technologists</li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("mentorship")}
            >
              <h2>Professionalism & Mentorship 👨‍🏫</h2>
              <span className="expand-icon">
                {expandedCard === "mentorship" ? "−" : "+"}
              </span>
            </div>
            <p>
              I've also learned a lot from Jessie and Brandies. Jessie taught us
              career development, while Brandie our program manager taught us
              the business aspect and how to be professional. Their mentorship
              showed me that professionalism isn't just about appearance—it's
              about preparation, communication, and consistency.
            </p>
            {expandedCard === "mentorship" && (
              <div className="expanded-content">
                <blockquote className="reflection-quote">
                  "Professionalism is not about perfection—it's about showing up
                  prepared, communicating clearly, and being consistent in your
                  actions."
                </blockquote>
                <h3>Key Lessons Learned</h3>
                <ul>
                  <li>
                    📝 How to craft a compelling resume that tells my story
                  </li>
                  <li>
                    💬 Professional communication in emails, meetings, and
                    presentations
                  </li>
                  <li>🎯 Setting clear goals and creating actionable plans</li>
                  <li>
                    🔄 The importance of follow-through and accountability
                  </li>
                  <li>
                    🌟 Building a personal brand that aligns with my values
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("workshops")}
            >
              <h2>Industry Workshops 🏢</h2>
              <span className="expand-icon">
                {expandedCard === "workshops" ? "−" : "+"}
              </span>
            </div>
            <p>
              The workshops with Accenture, Capital One, Salesforce, and other
              employer partners gave me valuable insights into how industry
              leaders approach technology and business. They reminded me that
              the skills we're building at i.c.stars are directly connected to
              the challenges companies face every day.
            </p>
            {expandedCard === "workshops" && (
              <div className="expanded-content">
                <div className="mission-grid">
                  <div className="mission-item">
                    <span className="mission-emoji">💼</span>
                    <h4>Accenture</h4>
                    <p>
                      Enterprise consulting and digital transformation
                      strategies
                    </p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">💳</span>
                    <h4>Capital One</h4>
                    <p>Banking technology and data-driven decision making</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">☁️</span>
                    <h4>Salesforce</h4>
                    <p>CRM platforms and customer experience innovation</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">🌐</span>
                    <h4>Tech Leaders</h4>
                    <p>Real-world applications of emerging technologies</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("jobsearch")}
            >
              <h2>Job Search Preparation 📄</h2>
              <span className="expand-icon">
                {expandedCard === "jobsearch" ? "−" : "+"}
              </span>
            </div>
            <p>
              Finally, resume feedback and job-search preparation have been
              critical. I've learned how to present my skills clearly, how to
              highlight my experiences, and how to position myself for the
              opportunities I want.
            </p>
            {expandedCard === "jobsearch" && (
              <div className="expanded-content">
                <h3>Job Search Strategy</h3>
                <ul>
                  <li>
                    🎯 Target companies aligned with my values and career goals
                  </li>
                  <li>
                    📝 Tailor resume and cover letter for each application
                  </li>
                  <li>
                    🔗 Leverage LinkedIn to build professional connections
                  </li>
                  <li>🤝 Attend networking events and industry meetups</li>
                  <li>
                    💡 Prepare for technical interviews with practice problems
                  </li>
                  <li>📊 Track applications and follow up professionally</li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("future")}
            >
              <h2>Looking Ahead 🚀</h2>
              <span className="expand-icon">
                {expandedCard === "future" ? "−" : "+"}
              </span>
            </div>
            <p>
              Looking ahead, I see a path that combines technical mastery,
              leadership, and consulting. I want to keep growing, keep learning,
              and keep building a career that reflects my values and creates
              impact.
            </p>
            {expandedCard === "future" && (
              <div className="expanded-content">
                <blockquote className="reflection-quote">
                  "Success is not just about what you achieve—it's about the
                  impact you create and the people you inspire along the way."
                </blockquote>
                <h3>My Vision for the Future</h3>
                <ul>
                  <li>
                    🎓 Continuous learning through certifications and advanced
                    training
                  </li>
                  <li>👥 Building and leading high-performing teams</li>
                  <li>
                    💡 Creating innovative solutions that solve real problems
                  </li>
                  <li>
                    🌍 Using technology to make a positive impact in my
                    community
                  </li>
                  <li>📈 Mentoring others on their career journeys</li>
                  <li>🏆 Becoming a recognized thought leader in my field</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerPlanning;
