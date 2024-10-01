"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "./anime";
import Body from "../body/body";
import { navLinks } from "../../constants";
import styles from "./style.module.css";



const Nav = () => {
    const [slectedLink, setSelectedLink] = useState({isActive: false, index: 0});
    
    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body navLinks={navLinks} selectedLink={slectedLink} setSelectedLink={setSelectedLink} key={navLinks.id}/>
                </div>
            </div>
        </motion.div>
    );
};

export default Nav;
