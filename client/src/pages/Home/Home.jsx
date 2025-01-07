import FindPet from "./components/FindPet/FindPet.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import SliderHero from "./components/SliderHero/SliderHero.jsx";
import { Testimonials } from "./components/Testimonials/Testimonials.jsx";

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
