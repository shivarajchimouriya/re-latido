import { Box } from "@chakra-ui/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./animatedCircle.module.css";
interface IProps {
  isActive: boolean;
}

const AnimatedCircle = ({ isActive }: IProps) => {
  return (
    <AnimatePresence>
      {" "}<Box
        position="absolute"
        width="115%"
        height="115%"
        zIndex={-10}
        isolation="isolate"
        as={motion.div}
        exit={{ opacity: 0 }}
      >
        <motion.svg
          layoutId="circle"
          fill="none"
          className={isActive ? styles.animated_circle : styles.circle}
          viewBox="0 0 192  192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="96" cy="96" r="80" />
        </motion.svg>
      </Box>
    </AnimatePresence>
  );
};

export default AnimatedCircle;
