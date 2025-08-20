import { HeroSlider } from "@/components/hero-slider";

export const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-228 bg-[url(/assets/hero/bg.png)] bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container h-full">
        <HeroSlider />
      </div>
    </section>
  );
};
