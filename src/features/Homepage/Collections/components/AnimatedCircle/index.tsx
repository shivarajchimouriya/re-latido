import { Box } from "@chakra-ui/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./animatedCircle.module.css";
interface IProps {
  isActive: boolean;
}

const AnimatedCircle = ({ isActive }: IProps) => {
  return (
    <Box
      position="absolute"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={-10}
      isolation="isolate"
    >
      <svg
        fill="none"
        className={isActive ? styles.animated_circle : styles.circle}
        viewBox="0 0 192  192"
        width="7rem"
        height="7rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="96" cy="96" r="80" />
      </svg>
    </Box>
  );
};

export default AnimatedCircle;
