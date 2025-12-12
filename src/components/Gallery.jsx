import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogCard from "./LogCard";
import "../App.css";

// Import all gallery images
import img1 from "../assets/DSC_4789.jpg";
import img2 from "../assets/DSC_0187 (1).jpg";
import img3 from "../assets/PSX_20200409_033252_resized_1_01.jpg";
import img4 from "../assets/DSC_1492_1-01.jpeg";
import img5 from "../assets/DSC_0060.jpg";

function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [imageTransitioning, setImageTransitioning] = useState(false);

  const galleryImages = [
    { src: img1, alt: "Photography 1" },
    { src: img2, alt: "Photography 2" },
    { src: img3, alt: "Photography 3" },
    { src: img4, alt: "Photography 4" },
    { src: img5, alt: "Photography 5" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsPlaying(false);
  };

  const nextImage = () => {
    setImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      setImageTransitioning(false);
    }, 400);
  };

  const prevImage = () => {
    setImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
      setImageTransitioning(false);
    }, 400);
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideTimeout) clearTimeout(hideTimeout);

    if (isFullscreen || isPlaying) {
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 2000);
      setHideTimeout(timeout);
    }
  };

  // Slideshow auto-advance
  useEffect(() => {
    if (isPlaying && lightboxOpen) {
      const interval = setInterval(nextImage, 5000); // 5 seconds per image
      return () => clearInterval(interval);
    }
  }, [isPlaying, lightboxOpen, currentImageIndex]);

  // Keyboard navigation
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
  }, [lightboxOpen]);

  return (
    <>
      <LogCard />
      <nav className="navbar-clean">
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
        <h1 className="signature-name">Gallery</h1>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
      </nav>

      {/* Side Panel Menu */}
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

      {/* Overlay */}
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
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`lightbox-close ${
                !showControls && (isFullscreen || isPlaying) ? "hidden" : ""
              }`}
              onClick={closeLightbox}
            >
              ✕
            </button>

            <button
              className={`lightbox-prev ${
                !showControls && (isFullscreen || isPlaying) ? "hidden" : ""
              }`}
              onClick={prevImage}
            >
              ❮
            </button>

            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className={`lightbox-image ${isFullscreen ? "fullscreen" : ""} ${
                imageTransitioning ? "fade-out" : "fade-in"
              }`}
            />

            <button
              className={`lightbox-next ${
                !showControls && (isFullscreen || isPlaying) ? "hidden" : ""
              }`}
              onClick={nextImage}
            >
              ❯
            </button>

            <div
              className={`lightbox-controls ${
                !showControls && (isFullscreen || isPlaying) ? "hidden" : ""
              }`}
            >
              <button className="slideshow-btn" onClick={toggleSlideshow}>
                {isPlaying ? "⏸ Pause" : "▶ Play Slideshow"}
              </button>
              <div className="image-counter">
                {currentImageIndex + 1} / {galleryImages.length}
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
