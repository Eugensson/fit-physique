import { ImUsers } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { FaBriefcase, FaClock, FaTrophy, FaDumbbell } from "react-icons/fa";

export const NAV_LINKS = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "classes", target: "classes", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonials", target: "testimonials", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

export const FEATURED_DATA = [
  {
    icon: FaUsers,
    title: "award-winning trainers",
    subtitle:
      "Our certified trainers provide expert guidance, personalized support, and motivation to help you achieve lasting results.",
  },
  {
    icon: IoIosPricetags,
    title: "excellent prices",
    subtitle:
      "We offer flexible membership plans, affordable packages, and great value without compromising on quality or service.",
  },
  {
    icon: FaDumbbell,
    title: "modern equipment",
    subtitle:
      "Train with state-of-the-art machines, free weights, and functional tools designed for safe, effective, and enjoyable workouts.",
  },
];

export const STATS_DATA = [
  {
    number: 12,
    icon: FaTrophy,
    title: "international awards",
  },
  {
    number: 21,
    icon: FaBriefcase,
    title: "training courses",
  },
  {
    number: 430,
    icon: ImUsers,
    title: "happy customers",
  },
  {
    number: 951,
    icon: FaClock,
    title: "working hours",
  },
];

export const CLASSES_DATA = [
  {
    name: "body building",
    img: "/assets/classes/bodybuilding.jpg",
    description:
      "Join our fitness center’s bodybuilding program with expert personal training and gym equipment for maximum results.",
  },
  {
    name: "cardio",
    img: "/assets/classes/cardio.jpg",
    description:
      "Boost endurance at our gym with cardio classes designed to improve stamina, heart health, and overall fitness.",
  },
  {
    name: "fitness",
    img: "/assets/classes/fitness.jpg",
    description:
      "Enjoy full-body workouts at our fitness center, combining personal training, strength exercises, and improved mobility.",
  },
  {
    name: "crossfit",
    img: "/assets/classes/crossfit.jpg",
    description:
      "Experience high-intensity CrossFit in our gym with personal training, functional movements, and strength conditioning sessions.",
  },
];
