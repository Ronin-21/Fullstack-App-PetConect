import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import {
  useGetPetsQuery,
  useLazyGetUserProfileQuery,
} from "../../store/api/apiSlice";
import { selectCurrentToken } from "../../store/auth/authSlice";

const Matchs = () => {
  const { data: pets } = useGetPetsQuery();
  const [trigger, { data: user }] = useLazyGetUserProfileQuery();
  const [isAllowed, setIsAllowed] = useState(false);
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    if (token) {
      trigger();
    } else {
      setIsAllowed(!isAllowed);
    }
  }, [token]);

  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[80%] min-h-[100vh] pt-[10em] flex flex-wrap justify-center items-center ">
        {pets?.map((petInfo, index) => (
          <Card
            petInfo={petInfo}
            userId={user?.user_id}
            allowed={isAllowed}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Matchs;
