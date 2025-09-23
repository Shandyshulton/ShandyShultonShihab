import { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiMysql } from "react-icons/si";

function About() {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const OUT_THRESHOLD = 0.3;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.intersectionRatio >= OUT_THRESHOLD);
      },
      { root: null, threshold: [0, OUT_THRESHOLD, 0.6, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const BASE = 150;
  const d = (ms) => ({ transitionDelay: `${ms}ms` });

  return (
    <section id="about">
      <div className="wrapper">
        <div ref={rootRef} className="about-anim-root">
          <h3 className={`reveal ${inView ? "in" : "out"}`} style={d(0 * BASE)}>
            About
          </h3>

          <p className={`reveal ${inView ? "in" : "out"}`} style={d(1 * BASE)}>
            Hello, I'm Shandy Shulton Shihab, a 20-year-old with a passion for
            web development and horse riding. I enjoy building websites and have
            hands-on experience using HTML, CSS, Javascript, Bootstrap, and the
            Laravel framework, backed by MySQL databases.
          </p>

          <p className={`reveal ${inView ? "in" : "out"}`} style={d(2 * BASE)}>
            Outside of web development, I am also an avid horse rider, which
            helps me build patience and focus. I am constantly exploring new
            technologies and looking for opportunities to grow professionally. I
            am enthusiastic about learning, collaborating with teams, and
            applying my skills to create impactful and user-friendly digital
            solutions. I have previously taken an English course for employees
            at LIA to further enhance my language skills.
          </p>

          <h4 className={`reveal ${inView ? "in" : "out"}`} style={d(3 * BASE)}>
            Programming Language &amp; Tools
          </h4>

          <div className="skills">
            <FaHtml5          className={`skill-icon ${inView ? "in" : "out"}`} style={d(4 * BASE)} />
            <FaCss3Alt        className={`skill-icon ${inView ? "in" : "out"}`} style={d(5 * BASE)} />
            <IoLogoJavascript className={`skill-icon ${inView ? "in" : "out"}`} style={d(6 * BASE)} />
            <SiPhp            className={`skill-icon ${inView ? "in" : "out"}`} style={d(7 * BASE)} />
            <FaBootstrap      className={`skill-icon ${inView ? "in" : "out"}`} style={d(8 * BASE)} />
            <FaLaravel        className={`skill-icon ${inView ? "in" : "out"}`} style={d(9 * BASE)} />
            <SiMysql          className={`skill-icon ${inView ? "in" : "out"}`} style={d(10 * BASE)} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
