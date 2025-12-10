import "./App.css";
import profileImage from "./assets/DSC_4789.jpg";
import galleryImage from "./assets/DSC_0187 (1).jpg";
import galleryImage2 from "./assets/PSX_20200409_033252_resized_1_01.jpg";
import galleryImage3 from "./assets/DSC_1492_1-01.jpeg";
import galleryImage4 from "./assets/DSC_0060.jpg";
import LogCard from "./components/LogCard";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
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

      <div className="container">
        <aside className="sidebar">
          <img
            className="profile-img"
            src={profileImage}
            alt="Nathan Jimenez"
          />
          <h1>About Me</h1>
          <p>
            "My name is Nathan, and I am currently serving as an intern with IC
            Stars in Chicago. My responsibilities include learning key concepts
            in business analysis, project management, and technology
            implementation, while also building interpersonal and leadership
            skills essential for success in the tech industry.I bring a diverse
            skill set that includes strong customer service abilities, a talent
            for teamwork, and effective communication skills honed through my
            background in customer-focused roles."
          </p>
        </aside>

        <main className="main-content">
          <div className="title-container">
            <h2 id="main-title">Welcome to my website</h2>
            <Link to="/gallery" className="arrow-button">
              <span>View Gallery</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div id="dev-log">
            <p>
              I created this website to highlight the skills and knowledge I
              developed during my time at IC Stars, while also showcasing my
              work as a photographer. The gallery features a curated selection
              of my photography, and prints are available for purchase. I invite
              you to explore and enjoy the collection
            </p>
            <aside className="gallery-preview">
              <img
                src={galleryImage}
                alt="Gallery preview"
                className="preview-img"
              />
              <img
                src={galleryImage2}
                alt="Gallery preview 2"
                className="preview-img"
              />
              <img
                src={galleryImage3}
                alt="Gallery preview 3"
                className="preview-img"
              />
              <img
                src={galleryImage4}
                alt="Gallery preview 4"
                className="preview-img"
              />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
