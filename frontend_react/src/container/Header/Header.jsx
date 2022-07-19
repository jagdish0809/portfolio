import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Jagdish</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <div className="p-text">Web Developer</div>
            <div className="p-text">Freelancer</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.round
        } className="profile_pic" alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        ></motion.img>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.figma, images.python, images.react].map((circle, index)=>{
            return(
            <div className="circle-cmp app__flex" key={`circle-${index}`} >
                <img src={circle} alt="circle" />
            </div>
            )
        })}
      </motion.div>
    </div>
  );
};

export default Header;
