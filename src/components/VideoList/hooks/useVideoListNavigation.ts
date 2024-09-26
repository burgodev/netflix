import { useState } from "react";

const useVideoListNavigation = () => {
  const [translateX, setTranslateX] = useState(0);

  const handleScrollLeft = () => {
    setTranslateX((prev) => Math.min(prev + 95, 0)); // Adjust the value as needed
  };

  const handleScrollRight = () => {
    setTranslateX((prev) => prev - 95); // Adjust the value as needed
  };

  return { translateX, handleScrollLeft, handleScrollRight };
};

export default useVideoListNavigation;
