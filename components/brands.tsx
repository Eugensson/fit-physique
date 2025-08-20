"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { BRAND_DATA } from "@/constants";
import { brandContainerVariant, brandItemVariant } from "@/lib/variants";

export const Brands = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <motion.ul
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-3 lg:grid-cols-5 py-8"
        >
          {BRAND_DATA.map(({ src, href, alt }, index) => (
            <motion.li variants={brandItemVariant} key={index}>
              <Link href={href} className="group">
                <Image
                  src={src}
                  alt={`Logo ${alt}`}
                  width={284}
                  height={106}
                  className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
