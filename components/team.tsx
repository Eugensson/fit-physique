"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Socials } from "@/components/socials";
import { CustomButton } from "@/components/custom-button";

import { fadeIn } from "@/lib/variants";
import { TRAINER_DATA } from "@/constants";

export const Team = () => {
  return (
    <section className="py-12 xl:h-[130vh]" id="team">
      <div className="container flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our trainers
        </motion.h2>
        <motion.ul
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {TRAINER_DATA.map(
            ({ image, name, role, description, socialList }, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-80 h-90 mx-auto mb-4 ">
                  <Image src={image} alt={name} fill className="object-cover" />
                </div>
                <h4 className="h4 mb-2">{name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">{role}</p>
                <p className="mb-6 max-w-80 mx-auto text-sm text-primary-100/70">
                  {description}
                </p>
                <Socials
                  socialList={socialList}
                  containerStyles="flex justify-center items-center gap-8"
                  linkStyles="hover:text-accent transition-all"
                  iconStyles="size-7"
                />
              </li>
            )
          )}
        </motion.ul>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton containerStyles="w-49 h-15.5" text="See all trainers" />
        </motion.div>
      </div>
    </section>
  );
};
