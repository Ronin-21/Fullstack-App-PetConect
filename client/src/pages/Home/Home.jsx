import FindPet from "./components/FindPet/FindPet";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import SliderHero from "./components/SliderHero/SliderHero";
import { Testimonials } from "./components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <SliderHero />
      <Services />
      <FindPet />
      <Testimonials />
    </>
  );
};

export default Home;
