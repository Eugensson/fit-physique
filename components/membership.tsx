"use client";

import { motion } from "framer-motion";

import { MembershipSlider } from "@/components/membership-slider";

import { fadeIn } from "@/lib/variants";

export const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-8 xl:pb-0 lg:h-[130vh] bg-[url(/assets/membership/bg.jpg)] bg-cover bg-center bg-no-repeat relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div className="relative z-20 container mx-auto px-0 text-white h-full flex flex-col xl:pt-12">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="h2 text-center mb-8"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};
