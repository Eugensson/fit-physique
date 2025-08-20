"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CustomButton } from "@/components/custom-button";

import { MEMBERSHOP_DATA } from "@/constants";

export const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-150"
    >
      {MEMBERSHOP_DATA.map(({ title, price, benefits }, index) => (
        <SwiperSlide key={index}>
          <div className="border backdrop-blur-xl md:backdrop-blur-none border-accent/70 hover:backdrop-blur-xl transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
            <div className="py-5 px-15 border-b border-accent/70">
              <h4 className="h4">{title}</h4>
            </div>
            <div className="p-7">
              <ul className="flex flex-col gap-5 mb-7">
                {benefits.map(({ text, icon: Icon }, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <Icon className="text-accent text-lg" />
                    {text}
                  </li>
                ))}
              </ul>
              <p className="text-accent mb-8 flex items-center gap-1">
                <sup className="text-4xl">$</sup>
                <strong className="text-6xl">{price}</strong>
                <em className="self-end text-2xl">/per month</em>
              </p>
              <CustomButton containerStyles="w-49 h-15.5" text="Buy now" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
