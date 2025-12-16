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
} from "lucide-react";
import "../App.css";

function ResumePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <span className="highlight">Professional Resume</span>
          </h1>
        </div>

        <div className="page-content">
          <div className="content-card">
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong> Nathanrayjimenez@gmail.com
              <br />
              <strong>Phone:</strong> (773) 567-1653
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/Nathan-Jimenez-77
              </a>
            </p>
          </div>

          <div className="content-card">
            <h2>Professional Summary</h2>
            <p>
              Proactive and detail-oriented professional transitioning into
              technology roles such as Data Analyst, Junior Developer, and
              Cybersecurity. Known for problem-solving, adaptability, and
              accuracy in high-pressure environments. Skilled in leveraging
              analytical thinking and collaboration to deliver results.
            </p>
          </div>

          <div className="content-card">
            <h2>Work Experience</h2>

            <h3>Server | Ihop</h3>
            <p className="job-date">2014-2020</p>
            <ul>
              <li>
                Operated Point-of-Sale (POS) systems to process orders and
                payments accurately
              </li>
              <li>
                Executed precise food and beverage orders to ensure guest
                satisfaction
              </li>
              <li>
                Delivered food and drinks promptly while maintaining
                presentation standards
              </li>
              <li>
                Maintained compliance with health, safety, and sanitation
                guidelines
              </li>
              <li>
                Coordinated with team members and kitchen staff to ensure
                seamless service
              </li>
              <li>
                Managed multiple tables and tasks simultaneously in a
                high-volume environment
              </li>
              <li>
                Handled cash and credit transactions with speed and accuracy
              </li>
              <li>
                Streamlined workflow by anticipating guest needs and
                prioritizing tasks
              </li>
            </ul>

            <h3>Sales Associate | Village Cycle Center</h3>
            <p className="job-date">2021-2025</p>
            <ul>
              <li>
                Drove sales by delivering personalized product recommendations,
                consistently closing deals and exceeding daily sales targets
              </li>
              <li>
                Leveraged in-depth product knowledge to fit and size customers
                on new bikes, ensuring comfort, safety, and performance
              </li>
              <li>
                Maximized revenue by upselling and cross-selling accessories,
                averaging a significant increase in add-on sales per transaction
              </li>
              <li>
                Engaged customers through active listening, using customer cues
                to identify needs and recommend the right products
              </li>
              <li>
                Delivered exceptional hospitality, creating a welcoming
                environment that encouraged repeat business and long-term
                loyalty
              </li>
              <li>
                Resolved customer concerns and objections with professionalism,
                maintaining high satisfaction and retention rates
              </li>
              <li>
                Maintained up-to-date knowledge of bikes, gear, and accessories
                to provide accurate, relevant, and compelling product guidance
              </li>
              <li>
                Enhanced store presentation by merchandising products and
                ensuring displays aligned with customer demand and brand
                standards
              </li>
            </ul>

            <h3>Team Assistant | Trulucks Fine Dining Restaurant</h3>
            <p className="job-date">3/1/2025-9/3/2025</p>
            <ul>
              <li>
                Polished wine glasses and silverware to fine-dining standards,
                ensuring a spotless presentation for guests
              </li>
              <li>
                Pre-bussed and reset tables efficiently, maintaining a clean and
                welcoming dining environment
              </li>
              <li>
                Prepared and baked fresh bread and sliced fruit daily,
                contributing to high food quality and guest satisfaction
              </li>
              <li>
                Upheld food safety standards and applied knowledge from Food
                Safety Certification to ensure compliance and protect guest
                health
              </li>
              <li>
                Collaborated with kitchen and service staff to support smooth
                operations during peak hours
              </li>
              <li>
                Demonstrated adaptability and efficiency in a fast-paced dining
                environment, balancing multiple responsibilities under pressure
              </li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Skills</h2>
            <ul>
              <li>Data Analysis</li>
              <li>Problem-Solving</li>
              <li>Time Management</li>
              <li>Customer Service</li>
              <li>POS Systems</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Certifications</h2>
            <ul>
              <li>Food Safety Certification</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePage;
