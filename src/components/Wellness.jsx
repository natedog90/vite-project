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
  Target,
  FileText,
  Camera,
  TrendingUp,
  Dumbbell,
  Bed,
  Utensils,
  Zap,
  Brain,
  Moon,
  Battery,
  RefreshCw,
  XCircle,
  CheckCircle,
  BookOpen,
  MessageCircle,
  Sparkles,
  Leaf,
} from "lucide-react";
import "../App.css";

function Wellness() {
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
            <span className="highlight">Wellness Journey</span>
          </h1>
        </div>

        <div className="page-content">
          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("financial")}
            >
              <h2>Financial Mindfulness</h2>
              <span className="expand-icon">
                {expandedCard === "financial" ? "−" : "+"}
              </span>
            </div>
            <p>
              During this cycle, I learned that wellness is just as important as
              technical growth. I became more mindful of my spending patterns,
              recognizing how stress influenced my choices, and began aligning
              my financial decisions with my long-term goals.
            </p>
            <p>
              My financial goal is simple: to be able to take care of myself and
              my family. I don't need much, and I don't need to become rich.
              What matters most is stability, security, and the ability to
              provide. At the end of the day, my health is my wealth—and that's
              the foundation I want to build on.
            </p>
            {expandedCard === "financial" && (
              <div className="expanded-content">
                <h3>Financial Wellness Practices</h3>
                <ul>
                  <li>
                    <TrendingUp
                      size={16}
                      style={{ display: "inline", marginRight: "0.5rem" }}
                    />
                    Track spending to identify patterns and areas for
                    improvement
                  </li>
                  <li>
                    ◆ Set realistic financial goals aligned with personal values
                  </li>
                  <li>
                    ► Recognize emotional triggers that lead to impulse spending
                  </li>
                  <li>
                    ▲ Build an emergency fund for stability and peace of mind
                  </li>
                  <li>
                    ★ Invest in skills and education that increase earning
                    potential
                  </li>
                  <li>
                    ♥ Prioritize experiences and relationships over material
                    things
                  </li>
                </ul>
                <blockquote className="reflection-quote">
                  "True wealth isn't measured by what you have—it's measured by
                  your health, your peace of mind, and your ability to care for
                  those you love."
                </blockquote>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("physical")}
            >
              <h2>Physical Wellness</h2>
              <span className="expand-icon">
                {expandedCard === "physical" ? "−" : "+"}
              </span>
            </div>
            <p>
              To manage the mental and physical demands, I committed to the gym
              and regular sauna sessions. The sauna became more than
              relaxation—it helped relieve stress, improved circulation, cleared
              my mind, and gave me better sleep. Together with exercise, it kept
              me grounded and focused.
            </p>
            {expandedCard === "physical" && (
              <div className="expanded-content">
                <div className="mission-grid">
                  <div className="mission-item">
                    <Dumbbell size={32} color="white" />
                    <h4>Strength Training</h4>
                    <p>Building physical resilience and mental toughness</p>
                  </div>
                  <div className="mission-item">
                    <Heart size={32} color="white" />
                    <h4>Sauna Sessions</h4>
                    <p>Stress relief, better circulation, and mental clarity</p>
                  </div>
                  <div className="mission-item">
                    <Moon size={32} color="white" />
                    <h4>Quality Sleep</h4>
                    <p>7-8 hours nightly for recovery and focus</p>
                  </div>
                  <div className="mission-item">
                    <Utensils size={32} color="white" />
                    <h4>Nutrition</h4>
                    <p>Fueling my body for optimal performance</p>
                  </div>
                </div>
                <h3>Benefits I've Experienced</h3>
                <ul>
                  <li>
                    ► Increased energy and productivity throughout the day
                  </li>
                  <li>◆ Better mental clarity and focus on complex tasks</li>
                  <li>♥ Reduced stress and improved emotional regulation</li>
                  <li>◇ Deeper, more restful sleep</li>
                  <li>★ Greater resilience when facing challenges</li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("mental")}
            >
              <h2>Mental Health & Self-Talk</h2>
              <span className="expand-icon">
                {expandedCard === "mental" ? "−" : "+"}
              </span>
            </div>
            <p>
              There were moments when the workload felt overwhelming. I wrote
              about those challenges in my journal, and that practice reminded
              me that vulnerability is part of growth. I also confronted
              negative self-talk and imposter syndrome by reframing my thoughts.
              Instead of telling myself "I'm not good enough," I reminded
              myself, "I'm learning, and growth takes time."
            </p>
            {expandedCard === "mental" && (
              <div className="expanded-content">
                <h3>Combating Negative Self-Talk</h3>
                <div className="mission-grid">
                  <div className="mission-item">
                    <XCircle size={32} color="#EF4444" />
                    <h4>Old Mindset</h4>
                    <p>"I'm not good enough"</p>
                  </div>
                  <div className="mission-item">
                    <CheckCircle size={32} color="#10B981" />
                    <h4>New Mindset</h4>
                    <p>"I'm learning and growing every day"</p>
                  </div>
                  <div className="mission-item">
                    <XCircle size={32} color="#EF4444" />
                    <h4>Old Mindset</h4>
                    <p>"I don't belong here"</p>
                  </div>
                  <div className="mission-item">
                    <CheckCircle size={32} color="#10B981" />
                    <h4>New Mindset</h4>
                    <p>"I belong in spaces where I bring value"</p>
                  </div>
                </div>
                <h3>Mental Wellness Tools</h3>
                <ul>
                  <li>◆ Daily journaling to process thoughts and emotions</li>
                  <li>◇ Mindfulness and meditation practices</li>
                  <li>► Talking with mentors and trusted friends</li>
                  <li>
                    ★ Setting realistic expectations and celebrating small wins
                  </li>
                  <li>● Taking breaks when feeling overwhelmed</li>
                  <li>
                    ♥ Embracing vulnerability as a strength, not a weakness
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="content-card interactive-card">
            <div
              className="card-header-interactive"
              onClick={() => toggleCard("affirmations")}
            >
              <h2>Affirmations</h2>
              <span className="expand-icon">
                {expandedCard === "affirmations" ? "−" : "+"}
              </span>
            </div>
            <p>
              I strengthened this mindset with affirmations: I am capable of
              learning and growing every day. My effort matters as much as the
              outcome. I belong in spaces where I bring value.
            </p>
            {expandedCard === "affirmations" && (
              <div className="expanded-content">
                <blockquote className="reflection-quote">
                  "I am capable of learning and growing every day."
                </blockquote>
                <blockquote className="reflection-quote">
                  "My effort matters as much as the outcome."
                </blockquote>
                <blockquote className="reflection-quote">
                  "I belong in spaces where I bring value."
                </blockquote>
                <blockquote className="reflection-quote">
                  "Challenges are opportunities for growth, not evidence of
                  failure."
                </blockquote>
                <blockquote className="reflection-quote">
                  "My health is my wealth, and I invest in it daily."
                </blockquote>
                <blockquote className="reflection-quote">
                  "I choose progress over perfection."
                </blockquote>
              </div>
            )}
          </div>

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
              This wellness journey taught me that resilience isn't just about
              pushing through—it's about caring for myself, challenging doubt,
              and choosing progress over perfection.
            </p>
            {expandedCard === "closing" && (
              <div className="expanded-content">
                <h3>Key Takeaways</h3>
                <ul>
                  <li>
                    ♥ Wellness is holistic—physical, mental, and financial
                    health are interconnected
                  </li>
                  <li>
                    ★ Self-care isn't selfish—it's necessary for sustained
                    success
                  </li>
                  <li>◆ Changing your mindset changes your reality</li>
                  <li>◇ Vulnerability and reflection are signs of strength</li>
                  <li>
                    ⚖ Balance is not about perfection—it's about making
                    intentional choices
                  </li>
                  <li>► Small, consistent actions create lasting change</li>
                </ul>
                <blockquote className="reflection-quote">
                  "Resilience isn't about never falling—it's about getting back
                  up, learning from the experience, and moving forward stronger
                  than before."
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wellness;
