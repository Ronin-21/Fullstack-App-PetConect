import Card from "../../components/Card/Card";
import { useGetPetsQuery } from "../../store/api/apiSlice";

const Matchs = () => {
  const { currentData } = useGetPetsQuery();

  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[80%] min-h-[100vh] pt-[10em] flex flex-wrap justify-center items-center ">
        {currentData?.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Matchs;
