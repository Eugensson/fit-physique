"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

import { STATS_DATA } from "@/constants";
import { statsContainerVariant, statsItemVariant } from "@/lib/variants";

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="comtainer">
      <motion.ul
        variants={statsContainerVariant}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-16"
      >
        {STATS_DATA.map(({ number, icon: Icon, title }, index) => (
          <motion.li
            variants={statsItemVariant}
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="border border-accent/90 size-35 mx-auto rounded-full p-1 mb-6">
              <div
                ref={ref}
                className="border border-accent/30 w-full h-full flex justify-center items-center text-5xl rounded-full"
              >
                {isInView && <CountUp start={0} end={number} duration={6} />}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <Icon className="text-3xl mb-2" />
              <h3 className="h4">{title}</h3>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
