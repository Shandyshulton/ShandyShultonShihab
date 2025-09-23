import { motion } from "framer-motion";
import "../styles/Education.css";

const SLOW_IN  = 1.0;                              
const SLOW_OUT = 0.8;                              
const EASE_IN  = [0.22, 0.61, 0.36, 1];            
const EASE_OUT = [0.4, 0, 0.2, 1];                 
const OFFSET_X = 120;                               

const sideVariants = {
  hidden: (c) => ({
    opacity: 0,
    x: c?.direction === "right" ? OFFSET_X : -OFFSET_X, 
    filter: "blur(2px)",
    transition: { type: "tween", duration: SLOW_OUT, ease: EASE_OUT }, 
  }),
  visible: (c) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      duration: SLOW_IN,
      ease: EASE_IN,
      delay: c?.delay ?? 0,
    },
  }),
};

function EducationCard({
  school,
  major,
  period,
  status,
  description,
  achievements,
  skills,
  direction = "right", 
  delay = 0,          
}) {
  return (
    <motion.div
      className="education-card"
      variants={sideVariants}
      custom={{ direction, delay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}  
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
    >
      <div className="edu-header">
        <h2>{school}</h2>
        <p>{major}</p>
        <span className="edu-date">{period}</span>
        <span className="edu-status">{status}</span>
      </div>

      <div className="edu-body">
        <p>{description}</p>

        {achievements?.length > 0 && (
          <>
            <h4>Key Achievements:</h4>
            <ul>
              {achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {skills?.length > 0 && (
          <>
            <h4>Technologies / Skills:</h4>
            <div className="tags">
              {skills.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default EducationCard;
