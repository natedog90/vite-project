import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import unitedTeamPhoto from "../assets/united-airlines-team.jpg";
import learningGrowthPhoto from "../assets/learning-growth-team.jpg";
import industryExposurePhoto from "../assets/industry-exposure.jpg";
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
  Plane,
  Users,
  Building2,
  TrendingUp,
  BarChart3,
  Lightbulb,
  ClipboardList,
  Handshake,
} from "lucide-react";
import "../App.css";

function Business() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skills, setSkills] = useState({
    dataAnalysis: 0,
    businessIntelligence: 0,
    projectManagement: 0,
    stakeholderEngagement: 0,
  });
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCard = (cardName) => {
    const newExpandedCard = expandedCard === cardName ? null : cardName;
    setExpandedCard(newExpandedCard);

    // Reset and animate skills when analytics card is opened
    if (cardName === "analytics" && newExpandedCard === "analytics") {
      setSkills({
        dataAnalysis: 0,
        businessIntelligence: 0,
        projectManagement: 0,
        stakeholderEngagement: 0,
      });

      setTimeout(() => {
        setSkills({
          dataAnalysis: 85,
          businessIntelligence: 80,
          projectManagement: 75,
          stakeholderEngagement: 80,
        });
      }, 100);
    }
  };

  const businessSkills = [
    {
      name: "Data Analysis",
      level: skills.dataAnalysis,
      icon: <BarChart3 size={24} color="white" />,
      color: "#10B981",
    },
    {
      name: "Business Intelligence",
      level: skills.businessIntelligence,
      icon: <Lightbulb size={24} color="white" />,
      color: "#3B82F6",
    },
    {
      name: "Project Management",
      level: skills.projectManagement,
      icon: <ClipboardList size={24} color="white" />,
      color: "#8B5CF6",
    },
    {
      name: "Stakeholder Engagement",
      level: skills.stakeholderEngagement,
      icon: <Handshake size={24} color="white" />,
      color: "#F59E0B",
    },
  ];

  const milestones = [
    {
      title: "United Airlines",
      icon: <Plane size={24} color="white" />,
      description: "Building data-driven solutions",
      color: "#3B82F6",
    },
    {
      title: "Team Collaboration",
      icon: <Users size={24} color="white" />,
      description: "Learning through teamwork",
      color: "#10B981",
    },
    {
      title: "Industry Visits",
      icon: <Building2 size={24} color="white" />,
      description: "Exposure to tech leaders",
      color: "#F59E0B",
    },
    {
      title: "Data Impact",
      icon: <TrendingUp size={24} color="white" />,
      description: "Creating meaningful insights",
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
            <span className="highlight">Business Experience</span>
          </h1>
        </div>

        <div className="page-content">
          {/* Business Analytics Overview - Moved to Top with Expand Icon */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("analytics")}
            >
              <h2>Business Analytics Overview 📊</h2>
              <span className="expand-icon">
                {expandedCard === "analytics" ? "−" : "+"}
              </span>
            </div>
            <p>
              Explore the key milestones and skills I developed during my
              business experience at i.c.stars and United Airlines.
            </p>
            {expandedCard === "analytics" && (
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

                  {/* Skills on Right */}
                  <div className="skills-section-right">
                    <h3>Business Skills</h3>
                    <p>Key competencies developed:</p>
                    <div className="tech-stack-grid">
                      {businessSkills.map((skill, index) => (
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

          {/* United Airlines Project */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("united")}
                >
                  <h2>United Airlines Project ✈️</h2>
                  <span className="expand-icon">
                    {expandedCard === "united" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  During my internship, one of the most impactful experiences
                  was our project with United Airlines. We built SQL queries,
                  designed visuals in Power BI, and learned how to structure
                  ERDs to make sense of complex data. Together, we created an
                  app that aggregated customer data into a centralized
                  platform—turning raw information into actionable insights. By
                  tracking trends in NPS scores and sentiment, we helped United
                  better understand customer needs and identify opportunities
                  for improvement.
                </p>
                {expandedCard === "united" && (
                  <div className="expanded-content">
                    <ul>
                      <li>
                        📊 Built complex SQL queries for customer data analysis
                      </li>
                      <li>🎨 Designed interactive Power BI dashboards</li>
                      <li>🗂️ Created ERDs to structure data relationships</li>
                      <li>📈 Tracked NPS scores and sentiment trends</li>
                      <li>💡 Transformed raw data into actionable insights</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="card-image">
                <img
                  src={unitedTeamPhoto}
                  alt="United Airlines Team at i.c.stars"
                  className="team-photo"
                />
              </div>
            </div>
          </div>

          {/* Learning and Growth */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("learning")}
                >
                  <h2>Learning and Growth 📚</h2>
                  <span className="expand-icon">
                    {expandedCard === "learning" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  This project wasn't just about technology—it was about
                  teamwork and mentorship. I learned how collaboration fuels
                  innovation, how mentors guide us through challenges, and how
                  persistence turns obstacles into breakthroughs. Every line of
                  SQL, every dashboard, and every design decision was a chance
                  to grow as both a technologist and a leader.
                </p>
                {expandedCard === "learning" && (
                  <div className="expanded-content">
                    <div className="mission-grid">
                      <div className="mission-item">
                        <span className="mission-emoji">🤝</span>
                        <h4>Collaboration</h4>
                        <p>Working together to solve complex problems</p>
                      </div>
                      <div className="mission-item">
                        <span className="mission-emoji">👨‍🏫</span>
                        <h4>Mentorship</h4>
                        <p>Learning from experienced professionals</p>
                      </div>
                      <div className="mission-item">
                        <span className="mission-emoji">💪</span>
                        <h4>Persistence</h4>
                        <p>Turning challenges into opportunities</p>
                      </div>
                      <div className="mission-item">
                        <span className="mission-emoji">🚀</span>
                        <h4>Innovation</h4>
                        <p>Creating cutting-edge solutions</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="card-image">
                <img
                  src={learningGrowthPhoto}
                  alt="Learning and Growth Team Presentation"
                  className="team-photo"
                />
              </div>
            </div>
          </div>

          {/* Industry Exposure */}
          <div className="content-card united-card interactive-card">
            <div className="card-content-wrapper">
              <div className="card-text">
                <div
                  className="card-header-interactive"
                  onClick={() => toggleCard("industry")}
                >
                  <h2>Industry Exposure 🏢</h2>
                  <span className="expand-icon">
                    {expandedCard === "industry" ? "−" : "+"}
                  </span>
                </div>
                <p>
                  Visiting companies like Salesforce and Accenture gave me a
                  broader perspective. I saw firsthand how industry leaders
                  approach data, innovation, and customer experience. Those
                  visits reminded me that the skills we're building aren't just
                  classroom exercises—they're the foundation for solving
                  real-world problems at scale.
                </p>
                {expandedCard === "industry" && (
                  <div className="expanded-content">
                    <ul>
                      <li>
                        ☁️ Salesforce - Learned about CRM and cloud solutions
                      </li>
                      <li>
                        💼 Accenture - Witnessed enterprise consulting
                        excellence
                      </li>
                      <li>🏋️ Equinox - Explored data in wellness industry</li>
                      <li>🌐 Saw real-world applications of our skills</li>
                      <li>🎯 Gained perspective on career opportunities</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="card-image">
                <img
                  src={industryExposurePhoto}
                  alt="Industry Leaders - Accenture, Salesforce, Equinox"
                  className="team-photo"
                />
              </div>
            </div>
          </div>

          {/* Closing Reflection */}
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("closing")}
            >
              <h2>Closing Reflection 💫</h2>
              <span className="expand-icon">
                {expandedCard === "closing" ? "−" : "+"}
              </span>
            </div>
            <p>
              This business experience taught me that technology is powerful,
              but it's people—teams, mentors, and communities—that make it
              meaningful. I leave i.c.stars with confidence in my technical
              skills, gratitude for the mentorship I've received, and a vision
              to use data and creativity to drive solutions that truly serve
              people.
            </p>
            {expandedCard === "closing" && (
              <div className="expanded-content">
                <blockquote className="reflection-quote">
                  "Data tells stories, but it's people who give those stories
                  meaning and purpose."
                </blockquote>
                <p>
                  This journey reinforced that business success isn't just about
                  numbers—it's about using those numbers to create real impact
                  for real people.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
