import { Link } from "react-router-dom";
import "./Footer.css";
import { motion } from "motion/react";

const Footer = () => {
  const footer = [
    { socials: "LinkedIn", url: "" },
    { socials: "Instagram", url: "" },
    { socials: "Github", url: "" },
    { socials: "Twitter(Formaly X)", url: "" },
  ];

  return (
    <div>
      <div className="footer-section">
        <div className="sub-footer">
          <div className="footer">
            {/* top content */}
            <h2 className="h2">
              I'm open to new opportunities and projects. <br />
              Feel free to reach out
            </h2>
            {/* bottom contents */}
            <div className="socials">
              <div>
                <ul className="social-footer">
                  {footer.map(({ socials, url }, index) => (
                    <motion.li
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
                      key={index}
                    >
                      <Link>↗ {socials}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="contacts">
                <motion.ul
                  initial={{
                    x: 60,
                    opacity: 0,
                    filter: "blur(3px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <li>israelbalogun15@gmail.com</li>
                  <li>+234 812 3759 602</li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
