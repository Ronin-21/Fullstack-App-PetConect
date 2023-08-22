import dogHero from "../../../../assets/img/hero.jpg";
const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col sm:flex-row justify-around sm:justify-center items-center h-[100vh] overflow-hidden">
        <img
          src={dogHero}
          alt="dogHero"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="z-10 flex flex-col items-center justify-center gap-5 p-10 text-center text-white bg-opacity-50 bg-tertiary-dark rounded-xl">
          <h2 className="text-8xl">¡Matchea ahora!</h2>
          <p className="text-2xl max-w-[30ch]">
            El sitio web perfecto para encontrar el alma gemela de tu mascota
          </p>
          <button className="bg-secondary px-5 py-3 rounded-xl hover:bg-secondary-light w-[50%] sm:w-[75%] lg:w-[50%] shadow-md transition-all text-xl text-body font-title font-bold">
            Buscar!
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
