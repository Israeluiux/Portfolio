import "./Experience.css";
import experience_data from "../Experience";
import { education } from "../Experience";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="exp-container">
      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="work-title"
      >
        Experience
      </motion.div>
      {experience_data.map((each, index) => (
        <motion.div
          initial={{
            y: 60,
            opacity: 0,
            filter: "blur(3px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
          }}
          className="work-exp"
          key={index}
        >
          <div className="pj-detail">
            <div className="pj-name">{each["project-name"]}</div>
            <div className="pj-position">{each["project-position"]}</div>
          </div>
          {/* right side of the div */}
          <div>
            <div className="pj-duration">{each["project-duration"]}</div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="work-title"
      >
        Education
      </motion.div>
      {education.map((each, index) => (
        <motion.div
          initial={{
            y: 60,
            opacity: 0,
            filter: "blur(3px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
          }}
          className="work-exp"
          key={index}
        >
          <div className="pj-detail">
            <div className="pj-name">{each.school}</div>
            <div className="pj-position">{each.course}</div>
          </div>
          {/* right side of the div */}
          <div>
            <div className="pj-duration">{each.year}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
