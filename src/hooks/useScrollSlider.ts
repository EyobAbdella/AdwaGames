import { useCallback, useEffect, useState } from "react";

const useScrollSlider = (sliderID: string) => {
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const slider = document.getElementById(sliderID);
    if (slider) {
      setIsAtEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth);
      setIsAtStart(slider.scrollLeft === 0);
    }
  }, [sliderID]);

  useEffect(() => {
    const slider = document.getElementById(sliderID);
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById(sliderID);
    slider!.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(sliderID);
    slider!.scrollLeft += 500;
  };

  return { isAtEnd, isAtStart, slideLeft, slideRight };
};

export default useScrollSlider;
