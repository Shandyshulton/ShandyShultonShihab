import "../styles/Experience.css"; // Import CSS
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { motion } from "framer-motion";

// Import gambar
import experienceImage1 from '../assets/digiup/SHANDY SHULTON SHIHAB_Portfolio(1).png';
import experienceImage2 from '../assets/magang/magang.png';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -150 },
  hiddenRight: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,  
      ease: "easeInOut"
    }
  }
};

const Experience = () => {
  return (
    <section id="experience">
      <div className="wrapper">
        <h1>My Experience</h1>
        <div className="experience-card-container">
          {/* Card 1 dari kiri */}
          <motion.div
            className="experience-card"
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"   
            viewport={{ once: false, amount: 0.2 }} 
          >
            <img
              src={experienceImage1}  
              alt="Modern Web Development"
              className="card-image"
            />
            <h3 className="card-title">Junior Web Developer</h3>
            <span className="card-location">
              <FaMapMarkerAlt /> Telkom Digiup
            </span>
            <span className="card-date">
              <MdDateRange /> December 3, 2022
            </span>
            <div className="card-details">
              <p>
                A workshop on creating an E-Catalog system with CRUD
                functionality using HTML, CSS, Bootstrap, and Laravel.
              </p>
            </div>
            <span className="card-participants">40 Participants</span>
            <div className="card-tags">
              <span className="tag">MySQL</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Javascript</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">Laravel</span>
            </div>
          </motion.div>

          {/* Card 2 dari kanan */}
          <motion.div
            className="experience-card"
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={experienceImage2}  
              alt="Digital Content Internship"
              className="card-image"
            />
            <h3 className="card-title">Digital Content Intern</h3>
            <span className="card-location">
              <FaMapMarkerAlt /> Dunamis Indonesia
            </span>
            <span className="card-date">
              <MdDateRange /> February 21 – April 27, 2022
            </span>
            <div className="card-details">
              <p>
                Assist in the creation and editing of digital content,
                including videos for websites, blogs, and social media posts.
              </p>
            </div>
            <div className="card-tags">
              <span className="tag">Adobe Premiere Pro</span>
              <span className="tag">VN Editor</span>
              <span className="tag">Capcut</span>
              <span className="tag">Canva</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
