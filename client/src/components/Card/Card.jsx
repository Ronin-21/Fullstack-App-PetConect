import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ info }) => {
  const [match, setMatch] = useState(false);
  return (
    <div className="flex flex-col justify-around items-center text-center min-w-[250px] w-[350px] min-h-[400px] px-4 my-8 mx-8 rounded-lg shadow-lg hover:shadow-primary hover:scale-[1.05] transition-all bg-white">
      <div className="w-[100%] flex flex-col md:flex-row justify-around items-center">
        <img
          src={info.pet_avatar}
          alt="/"
          className="w-[150px] rounded-3xl pointer-events-none"
        />
        <div className="flex flex-col">
          <p className="text-4xl">{info.pet_full_name}</p>
          <p className="text-xl">{info.pet_gender}</p>
        </div>
      </div>
      <p className="card-text">{info.pet_description}</p>
      <div className="w-[100%] flex justify-around items-center">
        <button
          onClick={() => {
            setMatch(!match);
          }}
          className="m-1 text-tertiary rounded-3xl"
        >
          {!match ? (
            <AiOutlineHeart className="text-[50px] rounded-3xl p-1" />
          ) : (
            <AiFillHeart className="text-[50px] rounded-3xl p-1" />
          )}
        </button>
        <Link
          to={`/pet-profile/${info.pet_id}`}
          className="m-1 text-2xl text-primary hover:text-primary-light"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
