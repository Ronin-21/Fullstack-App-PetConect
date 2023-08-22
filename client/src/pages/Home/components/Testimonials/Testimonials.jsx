import Marquee from "react-fast-marquee";
import data from "../../../../utils/card.json";

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center w-full gap-20 min-h-[600px] justify-center">
      <h4 className="text-5xl">Que dicen nuestros usuarios</h4>
      <Marquee className="mb-16" pauseOnHover="true">
        {data.map((user, index) => (
          <div
            className="flex flex-col items-center h-64 p-4 mx-8 bg-white rounded-lg shadow-2xl cursor-grab justify-evenly w-80"
            key={index}
          >
            <img
              src={user.image}
              alt="Shoes"
              className="w-24 h-24 rounded-full"
            />
            <div className="text-lg text-center">
              <p className="text-body-light">{user.description}</p>
              <p className="font-title">{user.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
