"use client"
import { useState } from "react";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { opacity } from "./anim";
import Nav from "../nav/nav";

const Header = () => {
  const [isActive, setIsActive] = useState();
  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>

            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
