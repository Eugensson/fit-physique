"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface SwiperNavButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

export const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: SwiperNavButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};
