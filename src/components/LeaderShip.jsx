import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import meetTheTeamPhoto from "../assets/meet-the-team.jpg";
import teaHostPhoto from "../assets/tea-host.jpg";
import cohortSoundtrackPhoto from "../assets/cohort-soundtrack.jpg";
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
  Rocket,
  Handshake,
  Music,
  Star,
  Sparkles,
  MessageCircle,
  Clock,
  Palette,
  Award,
} from "lucide-react";
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
    const newExpandedCard = expandedCard === cardName ? null : cardName;
    setExpandedCard(newExpandedCard);

    // Reset and animate skills when leadership-overview card is opened
    if (
      cardName === "leadership-overview" &&
      newExpandedCard === "leadership-overview"
    ) {
      setSkills({
        empathy: 0,
        communication: 0,
        patience: 0,
        creativity: 0,
        encouragement: 0,
      });

      setTimeout(() => {
        setSkills({
          empathy: 90,
          communication: 85,
          patience: 80,
          creativity: 88,
          encouragement: 92,
        });
      }, 100);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills({
        empathy: 95,
        communication: 90,
        patience: 85,
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
      icon: "♥",
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
      icon: "⌛",
      color: "#8B5CF6",
    },
    {
      name: "Creativity",
      level: skills.creativity,
      icon: "✦",
      color: "#F59E0B",
    },
    {
      name: "Encouragement",
      level: skills.encouragement,
      icon: "★",
      color: "#10B981",
    },
  ];

  const milestones = [
    {
      title: "Team Week",
      icon: "→",
      description: "The spark that started it all",
      color: "#3B82F6",
    },
    {
      title: "Tea Host",
      icon: "◆",
      description: "Building meaningful connections",
      color: "#10B981",
    },
    {
      title: "Cohort Soundtrack",
      icon: "♪",
      description: "Celebrating our stories through music",
      color: "#F59E0B",
    },
    {
      title: "Living My Mission",
      icon: "✓",
      description: "Leading with love every day",
      color: "#EF4444",
    },
  ];

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
            <span className="highlight">Leadership Journey</span>
          </h1>
        </div>

        <div className="page-content">
          {/* Leadership Journey Overview - Now at Top with Expand */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("leadership-overview")}
            >
              <h2>Leadership Journey Overview</h2>
              <span className="expand-icon">
                {expandedCard === "leadership-overview" ? "−" : "+"}
              </span>
            </div>
            <p>
              A comprehensive view of my leadership journey, including key
              milestones and the gifts that define my mission to love.
            </p>
            {expandedCard === "leadership-overview" && (
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
                            <span className="skill-percentage">
                              {skill.level}%
                            </span>
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
                </div>
              </div>
            )}
          </div>

          {/* Team Week */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("teamWeek")}
                >
                  <h2>Team Week</h2>
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
                      <li>★ Met my incredible cohort for the first time</li>
                      <li>
                        ◆ Learned the power of collaborative problem-solving
                      </li>
                      <li>■ Dove into real-world data challenges</li>
                      <li>► Discovered my strengths as a team player</li>
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
                  <h2>Tea Host</h2>
                  <span className="expand-icon">
                    {expandedCard === "teaHost" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  As Tea Host, I learned the power of connection. Hosting
                  industry professionals wasn't just networking—it was about
                  listening, sharing our journeys, and realizing that our voices
                  matter.
                </p>
                {expandedCard === "teaHost" && (
                  <div className="expanded-content">
                    <ul>
                      <li>◆ Hosted industry leaders and professionals</li>
                      <li>► Facilitated meaningful conversations</li>
                      <li>★ Built connections that matter</li>
                      <li>● Learned from diverse career paths</li>
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
                  <h2>Cohort Soundtrack</h2>
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
                      <li>♪ Curated songs that told our stories</li>
                      <li>★ Expressed creativity through music selection</li>
                      <li>◆ Celebrated each cohort member's journey</li>
                      <li>● Created lasting memories through sound</li>
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
              <h2>My Mission</h2>
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
                    <span className="mission-emoji">♥</span>
                    <h4>Empathy</h4>
                    <p>Listening deeply to understand others</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">💬</span>
                    <h4>Communication</h4>
                    <p>Speaking with clarity and purpose</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">⌛</span>
                    <h4>Patience</h4>
                    <p>Staying calm under pressure</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">✦</span>
                    <h4>Creativity</h4>
                    <p>Creating meaningful experiences</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">★</span>
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
              <h2>Closing Reflection</h2>
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
        </div>
      </div>
    </>
  );
}

export default Leadership;
