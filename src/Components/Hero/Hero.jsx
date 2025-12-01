import { Link } from "react-router-dom";
import "./Hero.css";
import { motion } from "motion/react";

const Hero = () => {
  return (
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
    >
      <section className="heading" id="home">
        <div className="contentsss">
          {/* parent container */}
          <div className="parent-content">
            {/* middle container */}
            <motion.div className="main-content">
              <div className="available">
                <Link>
                  <span>•</span> Available for hire
                </Link>
              </div>
              <h1 className="h1">
                Hey, I'm Balogun Israel, <br /> a Creative Frontend
                <br />
                Developer.
              </h1>
              <div className="p">A product designer and Frontend Developer</div>
            </motion.div>
          </div>
          <div className="CTO">
            <Link className="CTO-1" id="reachout" to="/contact">
              Reach Out
            </Link>
            <Link className="CTO-1" id="myworks" to="/myworks">
              Download CV
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
