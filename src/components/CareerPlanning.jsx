import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Home as HomeIcon,
  Crown,
  Briefcase,
  Code,
  Heart,
  Target as TargetIcon,
  FileText,
  Camera,
  Shield,
  Users,
  TrendingUp,
  CheckSquare,
  Award,
  BarChart3,
  Cloud,
  Trophy,
  Lightbulb,
  Rocket,
  GraduationCap,
  Building,
  CreditCard,
  Globe,
  BookOpen,
  Linkedin,
  Mail,
} from "lucide-react";
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
            <TargetIcon size={24} />
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
            <span className="highlight">Career Planning</span>
          </h1>
        </div>

        <div className="page-content">
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("brand")}
            >
              <h2>Personal Brand & Values</h2>
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
                    <Shield size={32} color="white" />
                    <h4>Integrity</h4>
                    <p>Doing the right thing, even when no one is watching</p>
                  </div>
                  <div className="mission-item">
                    <Users size={32} color="white" />
                    <h4>Loyalty</h4>
                    <p>Standing by my team, family, and commitments</p>
                  </div>
                  <div className="mission-item">
                    <TrendingUp size={32} color="white" />
                    <h4>Consistency</h4>
                    <p>Showing up and delivering quality work every day</p>
                  </div>
                  <div className="mission-item">
                    <CheckSquare size={32} color="white" />
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
              <h2>Career Goals</h2>
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
                    ◆ Master cybersecurity fundamentals and obtain relevant
                    certifications
                  </li>
                  <li>
                    ■ Strengthen SQL, Power BI, and data visualization skills
                  </li>
                  <li>● Build production-ready applications with React</li>
                  <li>
                    ◇ Gain hands-on experience with cloud platforms (AWS/Azure)
                  </li>
                  <li>► Secure a role as a Data Analyst or Junior Developer</li>
                </ul>

                <h3>Long-Term Goals (5+ Years)</h3>
                <ul>
                  <li>
                    ★ Become a recognized expert in data analytics and
                    cybersecurity
                  </li>
                  <li>
                    ◆ Transition into leadership roles (Team Lead, Manager)
                  </li>
                  <li>
                    ► Launch consulting services to help businesses leverage
                    data
                  </li>
                  <li>✦ Potentially start my own tech venture</li>
                  <li>♥ Mentor the next generation of technologists</li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("mentorship")}
            >
              <h2>Professionalism & Mentorship</h2>
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
                    ◆ How to craft a compelling resume that tells my story
                  </li>
                  <li>
                    ► Professional communication in emails, meetings, and
                    presentations
                  </li>
                  <li>★ Setting clear goals and creating actionable plans</li>
                  <li>● The importance of follow-through and accountability</li>
                  <li>
                    ✦ Building a personal brand that aligns with my values
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("jobsearch")}
            >
              <h2>Job Search Preparation</h2>
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
                    ◆ Target companies aligned with my values and career goals
                  </li>
                  <li>► Tailor resume and cover letter for each application</li>
                  <li>■ Leverage LinkedIn to build professional connections</li>
                  <li>◇ Attend networking events and industry meetups</li>
                  <li>
                    ● Prepare for technical interviews with practice problems
                  </li>
                  <li>★ Track applications and follow up professionally</li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("future")}
            >
              <h2>Looking Ahead</h2>
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
                <div className="mission-grid">
                  <div className="mission-item">
                    <span className="mission-emoji">★</span>
                    <h4>Technical Mastery</h4>
                    <p>Becoming an expert in data analytics</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">◆</span>
                    <h4>Leadership Growth</h4>
                    <p>Inspiring and mentoring others</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">►</span>
                    <h4>Impact</h4>
                    <p>Creating meaningful change</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">✦</span>
                    <h4>Innovation</h4>
                    <p>Pushing boundaries of possibility</p>
                  </div>
                </div>
                <h3>Milestones</h3>
                <div className="mission-grid">
                  <div className="mission-item">
                    <span className="mission-emoji">→</span>
                    <h4>2025</h4>
                    <p>Complete I.C. Stars and land first role</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">⌛</span>
                    <h4>2026-2027</h4>
                    <p>Advance to Senior Data Analyst</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">★</span>
                    <h4>2028-2030</h4>
                    <p>Transition to Data Science/Leadership</p>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">✦</span>
                    <h4>Beyond</h4>
                    <p>Lead data teams and mentor others</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerPlanning;
