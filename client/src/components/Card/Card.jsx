import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  useSetDislikesMutation,
  useSetLikesMutation,
} from "../../store/api/apiSlice.js";

const Card = ({ petInfo, userId, allowed }) => {
  const [setLikes, { isSuccess, isError, error }] = useSetLikesMutation();
  const [setDislikes] = useSetDislikesMutation();
  const [match, setMatch] = useState(false);
  const MySwal = withReactContent(Swal);

  const handleLikes = () => {
    if (!match) {
      setLikes(petInfo?.pet_id);
    } else {
      setDislikes(petInfo?.pet_id);
    }
  };

  // Logica para comparar estado del corazon de likes
  useEffect(() => {
    setMatch(petInfo?.Likes?.some((e) => e.liking_user_id === userId));
  }, [userId, petInfo]);

  useEffect(() => {
    if (isSuccess) {
      MySwal.fire({
        title: `Diste un like a ${petInfo?.pet_full_name}!!`,
        icon: "success",
        scrollbarPadding: false,
      });
    } else if (isError) {
      MySwal.fire({
        title: `${error?.data.error}`,
        icon: "error",
        scrollbarPadding: false,
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="flex flex-col justify-around items-center text-center min-w-[250px] w-[350px] min-h-[400px] px-4 my-8 mx-8 rounded-lg shadow-lg hover:shadow-primary hover:scale-[1.05] transition-all bg-white">
      <div className="w-[100%] flex flex-col md:flex-row justify-around items-center">
        <img
          src={petInfo?.pet_avatar}
          alt="/"
          className="w-[150px] rounded-3xl pointer-events-none"
        />
        <div className="flex flex-col">
          <p className="text-4xl">{petInfo?.pet_full_name}</p>
          <p className="text-xl">{petInfo?.pet_gender}</p>
        </div>
      </div>
      <p className="card-text">{petInfo?.pet_description}</p>
      <div className="w-[100%] flex justify-around items-center">
        <button
          onClick={handleLikes}
          className="m-1 text-tertiary rounded-3xl"
          disabled={allowed}
        >
          {!match ? (
            <AiOutlineHeart className="text-[50px] rounded-3xl p-1" />
          ) : (
            <AiFillHeart className="text-[50px] rounded-3xl p-1" />
          )}
        </button>
        <Link
          to={`/pet-profile/${petInfo?.pet_id}`}
          className="m-1 text-2xl text-primary hover:text-primary-light"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
