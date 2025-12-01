import { Link } from "react-router-dom";
import "./Work.css";
import work_data from "../../Components/work";
import { motion } from "motion/react";

const Work = () => {
  return (
    <div className="work-section">
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
        Featured Projects.
      </motion.div>
      {/* Work sections */}
      <motion.div className="work-body">
        {work_data.map((work, index) => (
          <motion.div
            initial={{
              y: 80,
              opacity: 0,
              filter: "blur(3px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="work-card"
            key={index}
          >
            <motion.div
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="imgs"
            >
              <motion.img src={work.img} alt="" />
            </motion.div>
            <div className="title">{work.title}</div>
            <div className="body">{work.body}</div>
            {/* types */}
            <div className="type-container">
              {work.type.map((each, index) => (
                <div className="type" key={index}>
                  {each}
                </div>
              ))}
            </div>
            <div className="ctoo">
              <Link to={work.link} className="a">
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
