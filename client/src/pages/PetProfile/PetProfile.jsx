import { useParams } from "react-router-dom";
import { useGetPetByIdQuery } from "../../store/api/apiSlice.js";

const PetProfile = () => {
  const params = useParams();
  const { data: pet } = useGetPetByIdQuery(params.id);

  return (
    <section className="pt-28 pb-20 flex gap-5 w-full max-w-[1300px] min-h-screen items-start justify-between mx-auto">
      {/* Aside with pet's owner profile */}
      <div className="flex flex-col flex-shrink-0 gap-3 p-5 overflow-hidden bg-white rounded shadow-md w-60">
        <img
          //src="https://randomuser.me/api/portraits/men/9.jpg"
          src={pet?.User?.user_avatar}
          alt="avatar"
          className="self-center object-cover w-40 h-40 rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-semibold text-center text-primary-dark">
            {pet?.User?.user_full_name}
          </h6>
          <p className="text-lg text-center">{pet?.User?.user_address}</p>
          <div className="text-sm text-tertiary">
            <p>{pet?.User?.user_country}</p>
            <p>{pet?.User?.user_city}</p>
            <p>{pet?.User?.user_email}</p>
          </div>
        </div>
      </div>
      {/* Main content with pet's info and actions */}
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col gap-4 p-6 overflow-hidden bg-white rounded shadow-md">
          <h3 className="text-4xl font-semibold text-center text-tertiary">
            {pet?.pet_full_name}
          </h3>
          <img
            src={pet?.pet_avatar}
            alt="pet"
            className="object-cover w-full h-80"
          />
          <h6 className="text-xl font-semibold text-[--primary-color-dark]">
            Datos de la mascota
          </h6>
          <hr className="h-[3px] bg-primary-light border-none mt-[-5px]" />
          <div className="flex items-start justify-between gap-4">
            <p className="w-[65ch] break-words">{pet?.pet_description}</p>
            <div className="w-1/3 columns-3">
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
        <div className="flex flex-col gap-4 p-6 overflow-hidden rounded shadow-md bg-tertiary">
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
