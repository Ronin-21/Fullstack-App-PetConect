import Marquee from "react-fast-marquee";
import Card from "../../../../components/Card/Card";
import { useGetPetsQuery } from "../../../../store/api/apiSlice";

const SliderHero = () => {
  const { data: pets } = useGetPetsQuery();

  return (
    <Marquee className="gap-12">
      {pets?.map((pet, index) => (
        <Card info={pet} key={index} />
      ))}
    </Marquee>
  );
};

export default SliderHero;
