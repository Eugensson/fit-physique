import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookCircleFill,
} from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { IoIosPricetags } from "react-icons/io";
import { FaUsers, FaCheck } from "react-icons/fa6";
import { FaBriefcase, FaClock, FaTrophy, FaDumbbell } from "react-icons/fa";

export const NAV_LINKS = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "classes", target: "classes", offset: -80 },
  { name: "team", target: "team", offset: -40 },
  { name: "prices", target: "prices", offset: -80 },
  { name: "testimonials", target: "testimonials", offset: -40 },
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

export const TRAINER_DATA = [
  {
    image: "/assets/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description:
      "David Williams is a professional fitness trainer and bodybuilding expert who helps athletes gain strength, improve endurance, and achieve results through personalized workout programs.",
    socialList: [
      { icon: RiFacebookCircleFill, link: "https://facebook.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body builder coach",
    description:
      "Rosy Rivera is a certified personal coach and fitness trainer passionate about bodybuilding, guiding clients to sculpt their body, boost energy, and build long-lasting healthy habits.",
    socialList: [
      { icon: RiFacebookCircleFill, link: "https://facebook.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description:
      "Matt Stone is a bodybuilding expert and fitness trainer focused on muscle growth, strength training, and performance coaching, helping clients stay motivated and reach peak condition.",
    socialList: [
      { icon: RiFacebookCircleFill, link: "https://facebook.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description:
      "Sofia Lauren is an experienced fitness trainer and personal coach who inspires clients with expert bodybuilding programs, improving strength, confidence, and overall health effectively.",
    socialList: [
      { icon: RiFacebookCircleFill, link: "https://facebook.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
];

export const MEMBERSHOP_DATA = [
  {
    title: "Standart",
    price: "30",
    benefits: [
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: MdClose, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
      { icon: MdClose, text: "No additional amenities" },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benefits: [
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: FaCheck, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
      { icon: MdClose, text: "No additional amenities" },
    ],
  },
  {
    title: "Professional",
    price: "60",
    benefits: [
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: FaCheck, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
      { icon: FaCheck, text: "No additional amenities" },
    ],
  },
];

export const TESTIMONIAL_DATA = [
  {
    img: "/assets/testimonial/lucy.jpg",
    message:
      "Joining this fitness club completely changed my lifestyle. The trainers are supportive, and every workout feels motivating and effective.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/testimonial/michael.jpg",
    message:
      "This gym offers everything I need to stay fit and healthy. Great equipment, professional coaches, and a welcoming community atmosphere.",
    name: "Michael Smith",
  },
  {
    img: "/assets/testimonial/maria.jpg",
    message:
      "I love training here because every session is personalized. The fitness club helps me progress steadily while keeping workouts enjoyable.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/testimonial/lucy.jpg",
    message:
      "Joining this fitness club completely changed my lifestyle. The trainers are supportive, and every workout feels motivating and effective.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/testimonial/michael.jpg",
    message:
      "This gym offers everything I need to stay fit and healthy. Great equipment, professional coaches, and a welcoming community atmosphere.",
    name: "Michael Smith",
  },
  {
    img: "/assets/testimonial/maria.jpg",
    message:
      "I love training here because every session is personalized. The fitness club helps me progress steadily while keeping workouts enjoyable.",
    name: "Maria Garcia",
  },
];

export const BLOG_DATA = [
  {
    img: "/assets/blog/post1.jpg",
    date: "August 20, 2025",
    title: "Top Fitness Tips to Boost Energy and Stay Motivated",
    href: "#",
  },
  {
    img: "/assets/blog/post2.jpg",
    date: "August 20, 2025",
    title: "How Strength Training Builds Muscle and Confidence",
    href: "#",
  },
  {
    img: "/assets/blog/post3.jpg",
    date: "August 20, 2025",
    title: "Effective Post-Workout Recovery for Faster Results",
    href: "#",
  },
  {
    img: "/assets/blog/post4.jpg",
    date: "August 20, 2025",
    title: "Balanced Nutrition Plans to Support Your Fitness Goals",
    href: "#",
  },
  {
    img: "/assets/blog/post1.jpg",
    date: "August 20, 2025",
    title: "Cardio Workouts That Improve Endurance and Health",
    href: "#",
  },
  {
    img: "/assets/blog/post2.jpg",
    date: "August 20, 2025",
    title: "The Benefits of Personal Training for Lasting Results",
    href: "#",
  },
  {
    img: "/assets/blog/post3.jpg",
    date: "August 20, 2025",
    title: "Building a Consistent Gym Routine That Works for You",
    href: "#",
  },
  {
    img: "/assets/blog/post4.jpg",
    date: "August 20, 2025",
    title: "Mindset and Motivation: Keys to Fitness Success",
    href: "#",
  },
];

export const BRAND_DATA = [
  {
    src: "/assets/brands/brand-1.png",
    href: "#",
    alt: "Fitness center",
  },
  {
    src: "/assets/brands/brand-2.png",
    href: "#",
    alt: "Lifter",
  },
  {
    src: "/assets/brands/brand-3.png",
    href: "#",
    alt: "Helth Center Best Local Gym",
  },
  {
    src: "/assets/brands/brand-4.png",
    href: "#",
    alt: "Fitness Club Gym",
  },
  {
    src: "/assets/brands/brand-5.png",
    href: "#",
    alt: "Bodybuilding Sports Gym",
  },
];
