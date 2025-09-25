import { useState, useEffect, useRef } from "react";
import profilePicture from "../assets/magang/fotopas.png";
import "../styles/Header.css";
import ScrollToTop from "../components/ScrollToTop"; // Import ScrollToTop
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header({ onLearnMore }) {
  const [isVisible, setIsVisible] = useState(false);   
  const [isLeaving, setIsLeaving] = useState(false);   
  const headerRef = useRef(null);

  // Animate-in saat komponen mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  // Animate-out ketika header mulai keluar dari viewport (scroll)
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const OUT_THRESHOLD = 0.6;
    const THRESHOLDS = [0, 0.25, OUT_THRESHOLD, 0.75, 1];

    const observer = new IntersectionObserver(
      ([entry]) => {
        const mostlyHidden = entry.intersectionRatio < OUT_THRESHOLD;
        if (mostlyHidden) {
          setIsLeaving(true);
        } else {
          setIsLeaving(false);
        }
      },
      {
        root: null,                 
        threshold: THRESHOLDS,      
        rootMargin: "-10% 0px -10% 0px", 
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleLearnMoreClick = () => {
    setIsLeaving(true);

    setTimeout(() => {
      if (onLearnMore) {
        onLearnMore();
      } else {
        document.getElementById("portfolio")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150); 

    setTimeout(() => setIsLeaving(false), 800); 
  };

  return (
    <>
      <ScrollToTop smooth={true} /> {/* Memanggil ScrollToTop untuk scroll ke atas */}
      <header
        ref={headerRef}
        className={`header-section ${isVisible ? "visible" : ""} ${
          isLeaving ? "leaving" : ""
        }`}
      >
        <div className="header-jumbotron">
          <img
            src={profilePicture}
            alt="Shandy Shulton Shihab"
            className={`profile-img ${isVisible ? "animate-in" : ""} ${
              isLeaving ? "animate-out" : ""
            }`}
          />
          <h3
            className={`${isVisible ? "animate-in" : ""} ${
              isLeaving ? "animate-out" : ""
            }`}
          >
            Shandy Shulton Shihab
          </h3>
          <p
            className={`${isVisible ? "animate-in" : ""} ${
              isLeaving ? "animate-out" : ""
            }`}
          >
            Web Developer | Computer Science Student
          </p>
          <div
            className={`socialMedia ${isVisible ? "animate-in" : ""} ${
              isLeaving ? "animate-out" : ""
            }`}
          >
            <a href="mailto:ssshandy60@gmail.com">
              <CgMail />
            </a>
            <a href="https://www.linkedin.com/in/shandy-shulton-shihab-73a25922a/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Shandyshulton">
              <FaGithub />
            </a>
          </div>
          <button
            className={`learn-more-btn ${isVisible ? "animate-in" : ""} ${
              isLeaving ? "animate-out" : ""
            }`}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
