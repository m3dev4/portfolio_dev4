import { mountAnim, opacity, slideLeft } from "../../utils/anime";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Link from './link';


const menu = [
    {
        title: "About",
        description: "Discover the journey, passion, and creative vision behind my work",
    },
    {
        title: "Project",
        description: "Explore innovative designs, cutting-edge solutions, and transformative experiences",
    },
    {
        title: "Contact",
        description: "Let's connect, collaborate, and bring your ideas to life",
    }
]

const Menu = ({ closeMenu }) => {
    return (
        <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">
    
            <div className={styles.header}>
              <motion.svg 
                variants={slideLeft} 
                {...mountAnim}
                onClick={() => {closeMenu()}} 
                width="68" 
                height="68" 
                viewBox="0 0 68 68" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L67 67" stroke="white"/>
                  <path d="M66.5 1L0.999997 66.5" stroke="white"/>
              </motion.svg>
            </div>
    
            <div className={styles.body}>
             {menu.map((el, index) => {
                return <Link data={el} index={index} key={index}/>
             })}
            </div>
    
            <motion.div 
              variants={opacity} 
              {...mountAnim} 
              custom={0.5} 
              className={styles.footer}>
              <a>FB</a>
              <a>IG</a>
              <a>IN</a>
              <a>BE</a>
            </motion.div>
    
        </motion.div>
    
  );
};

export default Menu;
