"use client";

import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { CustomButton } from "@/components/custom-button";
import { SwiperNavButtons } from "@/components/swiper-nav-buttons";

import { fadeIn } from "@/lib/variants";

export const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-175">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-accent">Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-4 text-white italic text-center lg:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae at sit cum.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get started" containerStyles="w-49 h-15.5" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-175">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-accent">Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-4 text-white italic text-center lg:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae at sit cum.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get started" containerStyles="w-49 h-15.5" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 z-50 h-32.5 w-full lg:w-175 flex justify-center lg:justify-start gap-1"
        btnStyles="size-14 flex items-center justify-center border border-accent text-white hover:bg-accent transition-colors duration-300 cursor-pointer"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};
