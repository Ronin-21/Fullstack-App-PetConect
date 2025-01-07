import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import Card from "../../../../components/Card/Card.jsx";
import {
  useGetPetsQuery,
  useLazyGetUserProfileQuery,
} from "../../../../store/api/apiSlice.js";
import { selectCurrentToken } from "../../../../store/auth/authSlice.js";

const SliderHero = () => {
  const { data: pets } = useGetPetsQuery();
  const [trigger, { data: user }] = useLazyGetUserProfileQuery();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    if (token) {
      trigger();
    }
  }, [token]);

  return (
    <Marquee className="gap-12">
      {pets?.map((pet, index) => (
        <Card petInfo={pet} userId={user?.user_id} key={index} />
      ))}
    </Marquee>
  );
};

export default SliderHero;
