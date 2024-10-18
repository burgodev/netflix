import { useEffect, useState } from "react";

const navigationStep = 20;

const useVideoListNavigation = (videosLength: number) => {
  const [translateX, setTranslateX] = useState(0);
  const [hasOverflowLeft, setHasOverflowLeft] = useState(false);
  const [hasOverflowRight, setHasOverflowRight] = useState(true);

  const handleScrollLeft = () => {
    setTranslateX((prev) => Math.min(prev + navigationStep, 0));
  };

  const handleScrollRight = () => {
    setTranslateX((prev) =>
      Math.max(prev - navigationStep, -(videosLength - 1) * navigationStep)
    );
  };

  useEffect(() => {
    const value = translateX > -(videosLength - 5) * navigationStep;

    setHasOverflowLeft(translateX < 0);
    setHasOverflowRight(value);
  }, [translateX, videosLength]);

  return {
    handleScrollLeft,
    handleScrollRight,
    translateX,
    hasOverflowLeft,
    hasOverflowRight,
  };
};

export default useVideoListNavigation;
