import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import chicagoNightSkyline from "../assets/chicago-night-skyline.jpg";
import chicagoWaterSkyline from "../assets/chicago-water-skyline.jpg";
import chicagoFireworks from "../assets/chicago-fireworks.jpg";
import chicagoParkSkyline from "../assets/chicago-park-skyline.jpg";
import chicagoBean from "../assets/chicago-bean.jpg";
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
  Play,
  Pause,
  Maximize,
  Minimize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  chicagoNightSkyline,
  chicagoWaterSkyline,
  chicagoFireworks,
  chicagoParkSkyline,
  chicagoBean,
];

function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hideTimeout, setHideTimeout] = useState(null);

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

  const handleMouseMove = () => {
    setShowControls(true);

    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }

    const timeout = setTimeout(() => {
      setShowControls(false);
    }, 2000);

    setHideTimeout(timeout);
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

  useEffect(() => {
    if (lightboxOpen) {
      setShowControls(true);

      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);

      setHideTimeout(timeout);

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }
  }, [lightboxOpen]);

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
            <span className="highlight">Photography Gallery</span>
          </h1>
        </div>

        <div className="page-content">
          <div className="content-card">
            <h2>My Photography</h2>
            <p>
              Welcome to my photography gallery. Here you will find a sample
              size of some of my work over the Yearsgit. Click on any image to view
              it in full size and use the slideshow feature to enjoy the
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
        <div
          className="lightbox"
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`lightbox-controls ${
                !showControls ? "auto-hide" : ""
              }`}
            >
              <button className="slideshow-btn" onClick={toggleSlideshow}>
                {isPlaying ? (
                  <>
                    <Pause size={18} />
                    Pause
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Play
                  </>
                )}
              </button>
              <div className="image-counter">
                {currentIndex + 1} / {images.length}
              </div>
              <button className="fullscreen-btn" onClick={toggleFullscreen}>
                {isFullscreen ? (
                  <>
                    <Minimize size={18} />
                    Exit
                  </>
                ) : (
                  <>
                    <Maximize size={18} />
                    Fullscreen
                  </>
                )}
              </button>
            </div>

            <button
              className={`lightbox-prev ${!showControls ? "auto-hide" : ""}`}
              onClick={prevImage}
            >
              <ChevronLeft size={28} />
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
            <button
              className={`lightbox-next ${!showControls ? "auto-hide" : ""}`}
              onClick={nextImage}
            >
              <ChevronRight size={28} />
            </button>
            <button
              className={`lightbox-close ${!showControls ? "auto-hide" : ""}`}
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
