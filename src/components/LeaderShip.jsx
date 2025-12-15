import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogCard from "./LogCard";
import meetTheTeamPhoto from "../assets/meet-the-team.jpg";
import teaHostPhoto from "../assets/tea-host.jpg";
import cohortSoundtrackPhoto from "../assets/cohort-soundtrack.jpg";
import "../App.css";

function Leadership() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skills, setSkills] = useState({
    empathy: 0,
    communication: 0,
    patience: 0,
    creativity: 0,
    encouragement: 0,
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
        empathy: 90,
        communication: 85,
        patience: 80,
        creativity: 88,
        encouragement: 92,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const leadershipSkills = [
    {
      name: "Empathy",
      level: skills.empathy,
      icon: "❤️",
      color: "#EF4444",
    },
    {
      name: "Communication",
      level: skills.communication,
      icon: "💬",
      color: "#3B82F6",
    },
    {
      name: "Patience",
      level: skills.patience,
      icon: "⏳",
      color: "#8B5CF6",
    },
    {
      name: "Creativity",
      level: skills.creativity,
      icon: "🎨",
      color: "#F59E0B",
    },
    {
      name: "Encouragement",
      level: skills.encouragement,
      icon: "⭐",
      color: "#10B981",
    },
  ];

  const milestones = [
    {
      title: "Team Week",
      icon: "🚀",
      description: "The spark that started it all",
      color: "#3B82F6",
    },
    {
      title: "Tea Host",
      icon: "🤝",
      description: "Building meaningful connections",
      color: "#10B981",
    },
    {
      title: "Cohort Soundtrack",
      icon: "🎵",
      description: "Celebrating our stories through music",
      color: "#F59E0B",
    },
    {
      title: "Living My Mission",
      icon: "💫",
      description: "Leading with love every day",
      color: "#EF4444",
    },
  ];

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
        </div>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="page-container">
        <div className="page-header">
          <h1 className="page-hero-title">
            <span className="highlight">Leadership Journey</span>
          </h1>
        </div>

        <div className="page-content">
          {/* Team Week */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("teamWeek")}
                >
                  <h2>Team Week 🚀</h2>
                  <span className="expand-icon">
                    {expandedCard === "teamWeek" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  Team Week was the spark. Meeting my cohort, being assigned
                  teams, and diving into a United Airlines project showed me how
                  collaboration and resilience can turn challenges into growth.
                </p>
                {expandedCard === "teamWeek" && (
                  <div className="expanded-content">
                    <ul>
                      <li>✨ Met my incredible cohort for the first time</li>
                      <li>
                        🤝 Learned the power of collaborative problem-solving
                      </li>
                      <li>📊 Dove into real-world data challenges</li>
                      <li>💡 Discovered my strengths as a team player</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="card-image">
                <img
                  src={meetTheTeamPhoto}
                  alt="Meet the Team presentation at United Airlines"
                  className="team-photo"
                />
              </div>
            </div>
          </div>

          {/* Tea Host */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("teaHost")}
                >
                  <h2>Tea Host 🤝</h2>
                  <span className="expand-icon">
                    {expandedCard === "teaHost" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  As Tea Host, I learned the power of connection. Hosting
                  industry professionals wasn't just networking—it was about
                  listening, sharing our journeys, and realizing that our voices
                  matter. Special shoutout to Sandee Kastrul, CEO and co-founder
                  of i.c.stars, whose vision and leadership created this
                  transformative space where young leaders like us can grow,
                  connect, and thrive.
                </p>
                {expandedCard === "teaHost" && (
                  <div className="expanded-content">
                    <ul>
                      <li>☕ Hosted industry leaders and professionals</li>
                      <li>🎙️ Facilitated meaningful conversations</li>
                      <li>🌟 Built connections that matter</li>
                      <li>💼 Learned from diverse career paths</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="card-image">
                <img
                  src={teaHostPhoto}
                  alt="Tea Host event with i.c.stars cohort and CEO Sandee Kastrul"
                  className="team-photo"
                />
              </div>
            </div>
          </div>

          {/* Cohort Soundtrack */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("soundtrack")}
                >
                  <h2>Cohort Soundtrack 🎵</h2>
                  <span className="expand-icon">
                    {expandedCard === "soundtrack" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  One of my proudest moments was creating a soundtrack for our
                  cohort. Each song represented someone's story, and together it
                  became a celebration of unity, creativity, and encouragement.
                </p>
                {expandedCard === "soundtrack" && (
                  <div className="expanded-content">
                    <ul>
                      <li>🎶 Curated songs that told our stories</li>
                      <li>🎨 Expressed creativity through music selection</li>
                      <li>💫 Celebrated each cohort member's journey</li>
                      <li>🎧 Created lasting memories through sound</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="card-image">
                <img
                  src={cohortSoundtrackPhoto}
                  alt="Music is the language that speaks to everything on planet Earth"
                  className="team-photo"
                />
              </div>
            </div>
          </div>

          {/* My Mission */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("mission")}
            >
              <h2>My Mission 💫</h2>
              <span className="expand-icon">
                {expandedCard === "mission" ? "−" : "+"}
              </span>
            </div>
            <p>
              Through it all, I lived my mission: to love. My gifts—empathy,
              communication, patience, creativity, and encouragement—weren't
              just words on paper. They became actions: listening to teammates,
              speaking with clarity, staying calm under pressure, creating
              something meaningful, and lifting others up.
            </p>
            {expandedCard === "mission" && (
              <div className="expanded-content">
                <div className="mission-grid">
                  <div className="mission-item">
                    <span className="mission-emoji">❤️</span>
                    <h4>Empathy</h4>
                    <p>Listening deeply to understand others</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">💬</span>
                    <h4>Communication</h4>
                    <p>Speaking with clarity and purpose</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">⏳</span>
                    <h4>Patience</h4>
                    <p>Staying calm under pressure</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">🎨</span>
                    <h4>Creativity</h4>
                    <p>Creating meaningful experiences</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">⭐</span>
                    <h4>Encouragement</h4>
                    <p>Lifting others to reach their potential</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Closing */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("closing")}
            >
              <h2>Closing Reflection 🌟</h2>
              <span className="expand-icon">
                {expandedCard === "closing" ? "−" : "+"}
              </span>
            </div>
            <p>
              i.c.stars wasn't just an internship—it was transformation. I leave
              with gratitude, stronger leadership, and a renewed commitment to
              lead with compassion, inspire with creativity, and encourage
              others to see their own potential.
            </p>
            {expandedCard === "closing" && (
              <div className="expanded-content">
                <blockquote className="reflection-quote">
                  "Leadership is not about being in charge. It's about taking
                  care of those in your charge."
                </blockquote>
                <p>
                  This journey taught me that true leadership is rooted in
                  service, growth, and authentic connection.
                </p>
              </div>
            )}
          </div>

          {/* Leadership Journey Overview - Moved to Bottom */}
          <div className="content-card dashboard-skills-card">
            <h2>Leadership Journey Overview</h2>
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

              {/* Leadership Skills on Right */}
              <div className="skills-section-right">
                <h3>Leadership Gifts</h3>
                <p>The qualities that define my mission to love:</p>
                <div className="tech-stack-grid">
                  {leadershipSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
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
        </div>
      </div>
    </>
  );
}

export default Leadership;
