import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { height, background, mountAnim } from "../../utils/anime";
const Stairs = () => {
  return (
    <motion.div className={styles.stairs}>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            variants={height}
            {...mountAnim}
            custom={4 - index}
            className={styles.stair}
          ></motion.div>
        );
      })}
      <motion.div
        variants={background}
        {...mountAnim}
        className={styles.background}
      ></motion.div>
    </motion.div>
  );
};

export default Stairs;
