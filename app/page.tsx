import { Blog } from "@/components/blog";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { Classes } from "@/components/classes";
import { Membership } from "@/components/membership";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonials />
      <Blog />
      <Brands />
      {/* <div className="h-1000" /> */}
    </section>
  );
};

export default Home;
