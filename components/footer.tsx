"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { RxEnvelopeClosed } from "react-icons/rx";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { CustomButton } from "@/components/custom-button";

import { SOCIAL_DATA, GALLERY_DATA, BLOG_DATA } from "@/constants";
import { footerContainerVariant, footerItemVariant } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24" id="contact">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12 text-white"
        >
          <motion.div
            variants={footerItemVariant}
            className="flex flex-col gap-4"
          >
            <Logo />
            <p className="max-w-sm text-sm text-white/70">
              Fit Physique is a premier fitness club in Lincoln Park, Chicago,
              dedicated to strength training, personal coaching, and a healthier
              lifestyle for every member.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <TfiLocationPin size={20} className="text-accent" />
                <address className="not-italic">
                  Lincoln Park Chicago, Illinois
                </address>
              </li>
              <li className="flex items-center gap-4">
                <LiaPhoneSolid size={20} className="text-accent" />
                <span>
                  <Link
                    href="tel:+17735551234"
                    className="hover:underline hover:text-accent transition-all duration-300"
                  >
                    (773) 555-1234
                  </Link>
                  ,&nbsp;
                  <Link
                    href="tel:+13125559876"
                    className="hover:underline hover:text-accent transition-all duration-300"
                  >
                    (312) 555-9876
                  </Link>
                </span>
              </li>
              <li>
                <Link
                  href="mailto:info@fit-physique.com"
                  className="flex items-center gap-4 group"
                >
                  <RxEnvelopeClosed size={20} className="text-accent" />
                  <span className="group-hover:underline group-hover:text-accent transition-all duration-300">
                    info@fit-physique.com
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            <ul>
              {BLOG_DATA.slice(0, 3).map(({ date, title, href }, index) => (
                <li
                  key={index}
                  className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4 last:border-none last:pb-0 last:mb-0"
                >
                  <Link
                    href={href}
                    className="hover:text-accent transition-all duration-300"
                  >
                    <h5 className="h5 leading-snug">{title}</h5>
                  </Link>
                  <p className="text-gray-400 text-xs tracking-[3px] uppercase">
                    {date}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            <ul className="flex flex-wrap gap-2">
              {GALLERY_DATA.map(({ img, alt, href }, index) => (
                <li key={index}>
                  <Link href={href}>
                    <Image
                      src={img}
                      alt={alt}
                      width={100}
                      height={100}
                      className="object-cover aspect-square hover:scale-105 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>Subscribe to our newsletter to receive the latest news.</p>
              <form className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-12.5 outline-none px-4 bg-white placeholder:text-primary-300/50 text-primary-300"
                />
                <CustomButton containerStyles="h-12.5 px-8" text="Send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="container flex justify-between items-center h-full border-t border-white/20 py-12">
        <span className="text-sm text-white">
          &copy; Copyright 2025 Fit Physique
        </span>
        <Socials
          socialList={SOCIAL_DATA}
          containerStyles="flex items-center gap-4"
          linkStyles="text-white hover:text-accent transition-all duration-300"
          iconStyles="size-7"
        />
      </div>
    </footer>
  );
};
