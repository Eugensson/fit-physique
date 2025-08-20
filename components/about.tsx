"use client";

import { motion } from "framer-motion";

import { Achievements } from "@/components/achievements";

import { fadeIn } from "@/lib/variants";
import { FEATURED_DATA } from "@/constants";

export const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-150 mx-auto text-center"
          >
            We inspire healthy lifestyles through professional training,
            supportive community, and facilities designed for real results.
          </motion.p>
        </div>
        <motion.ul
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {FEATURED_DATA.map(({ icon: Icon, title, subtitle }, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center gap-4 border border-gray-300 p-10"
            >
              <div className="bg-primary-300 size-20 flex items-center justify-center rounded-full">
                <Icon className="text-4xl text-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <h3 className="h4 text-accent">{title}</h3>
                <p>{subtitle}</p>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};
