import { useParams } from "react-router-dom";
import {
  useGetPetByIdQuery,
  useGetUserProfileQuery,
} from "../../store/api/apiSlice";

const PetProfile = () => {
  const params = useParams();
  const { data: user } = useGetUserProfileQuery();

  const { data: pet } = useGetPetByIdQuery(params.id);

  return (
    <section className="pt-28 pb-20 flex gap-5 w-full max-w-[1300px] min-h-screen items-start justify-between mx-auto">
      {/* Aside with pet's owner profile */}
      <div className="flex flex-col gap-3 flex-shrink-0 w-60 bg-white rounded overflow-hidden shadow-md p-5">
        <img
          src="https://randomuser.me/api/portraits/men/9.jpg"
          alt="avatar"
          className="object-cover w-40 h-40 rounded-full self-center"
        />
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-semibold text-primary-dark text-center">
            {user?.user_full_name}
          </h6>
          <p className="text-lg text-center">{user?.user_address}</p>
          <div className="text-tertiary text-sm">
            <p>{user?.user_country}</p>
            <p>{user?.user_city}</p>
            <p>{user?.user_email}</p>
          </div>
        </div>
      </div>
      {/* Main content with pet's info and actions */}
      <div className="w-full flex flex-col gap-8">
        <div className="bg-white flex flex-col gap-4 rounded overflow-hidden shadow-md p-6">
          <h3 className="text-4xl font-semibold text-center text-tertiary">
            {pet?.pet_full_name}
          </h3>
          <img src={pet?.img} alt="pet" className="object-cover w-full h-80" />
          <h6 className="text-xl font-semibold text-[--primary-color-dark]">
            Datos de la mascota
          </h6>
          <hr className="h-[3px] bg-primary-light border-none mt-[-5px]" />
          <div className="flex gap-4 items-start justify-between">
            <p className="w-[65ch] break-words">{pet?.pet_description}</p>
            <div className="columns-3 w-1/3">
              <div className="mb-2">
                <p className="font-semibold">Género</p>
                <p className="text-primary">{pet?.pet_gender}</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Peso</p>
                <p className="text-primary">{pet?.pet_weight} kg</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Raza</p>
                <p className="text-primary">{pet?.pet_breed}</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Edad</p>
                <p className="text-primary">{pet?.pet_age} años</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Nacionalidad</p>
                <p className="text-primary">{pet?.pet_nationality}</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Chip</p>
                <p className="text-primary">{pet?.pet_chip ? "Si" : "No"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-tertiary flex flex-col gap-4 rounded overflow-hidden shadow-md p-6">
          <h3 className="text-4xl font-semibold text-center text-white">
            Galería
          </h3>
          {/* <div className="flex flex-wrap gap-3 justify-evenly">
            {images?.map((img, index) => {
              console.log(img);
              return (
                <img
                  src={img}
                  alt="gallery"
                  className="object-cover w-48 h-48 rounded-lg shadow-md"
                  key={index}
                />
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default PetProfile;
