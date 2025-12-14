import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogCard from "./LogCard";
import galleryImage1 from "../assets/DSC_5735.jpg";
import galleryImage2 from "../assets/DSC_1492_1-01.jpeg";
import galleryImage3 from "../assets/DSC_0060.jpg";
import chicagoBlur from "../assets/chicago-blur.jpg";
import chicagoSkyline from "../assets/chicago-skyline.jpg";
import deer from "../assets/deer.jpg";
import lakefront from "../assets/lakefront.jpg";
import fireworks from "../assets/fireworks.jpg";
import monumentReflection from "../assets/monument-reflection.jpg";
import riverBridges from "../assets/river-bridges.jpg";
import chicagoTheater from "../assets/chicago-theater.jpg";
import jellyfish from "../assets/jellyfish.jpg";
import bridgeNight from "../assets/bridge-night.jpg";
import "../App.css";

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  chicagoBlur,
  chicagoSkyline,
  deer,
  lakefront,
  fireworks,
  monumentReflection,
  riverBridges,
  chicagoTheater,
  jellyfish,
  bridgeNight,
];

function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setIsPlaying(false);
    setImageLoaded(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsPlaying(false);
    setIsFullscreen(false);
  };

  const nextImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFadeOut(false);
    }, 400);
  };

  const prevImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFadeOut(false);
    }, 400);
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextImage, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
      if (e.key === " ") {
        e.preventDefault();
        toggleSlideshow();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, currentIndex]);

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
          <div className="content-card">
            <h2>My Photography Portfolio</h2>
            <p>
              Welcome to my photography gallery. Click on any image to view it
              in full size and use the slideshow feature to enjoy the
              collection.
            </p>
          </div>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-overlay">
                  <span className="view-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <button className="lightbox-prev" onClick={prevImage}>
              ❮
            </button>

            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={`lightbox-image ${isFullscreen ? "fullscreen" : ""} ${
                fadeOut ? "fade-out" : "fade-in"
              }`}
              loading="eager"
              decoding="async"
            />

            <button className="lightbox-next" onClick={nextImage}>
              ❯
            </button>

            <div className="lightbox-controls">
              <button className="slideshow-btn" onClick={toggleSlideshow}>
                {isPlaying ? "⏸ Pause" : "▶ Play Slideshow"}
              </button>
              <div className="image-counter">
                {currentIndex + 1} / {images.length}
              </div>
              <button className="fullscreen-btn" onClick={toggleFullscreen}>
                {isFullscreen ? "⊟ Fit Screen" : "⊡ Fullscreen"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
