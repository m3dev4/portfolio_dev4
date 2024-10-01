import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { translate, blur } from "./anim";
import styles from "./style.module.css";
import Link from "next/link";


const Body = ({ navLinks, selectedLink, setSelectedLink }) => {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {navLinks.map((link, index) => {
        const { label, href } = link;
        return (
          <Link href={href} key={index}>
            <motion.p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(label)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

Body.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLink: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedLink: PropTypes.func.isRequired,
};

export default Body;
