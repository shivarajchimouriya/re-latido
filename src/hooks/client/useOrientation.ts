import { logger } from "@/utils/logger";
import { useState, useEffect } from "react";

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  const handleOrientationChange = () => {
    const isLandscapeOrientation = window.screen.orientation;

    switch (isLandscapeOrientation.type) {
      case "landscape-primary":
        setIsLandscape(true);
        break;
      case "landscape-secondary":
        setIsLandscape(true);
        break;
      case "portrait-secondary":
        setIsLandscape(false);
        break;
      case "portrait-primary":
        setIsLandscape(false);
        break;
      default:
        setIsLandscape(false);
    }
  };
  useEffect(() => {
    try {
      handleOrientationChange();
    } catch (error) {
      logger.error("error", error);
    }
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return isLandscape;
};

export default useOrientation;
