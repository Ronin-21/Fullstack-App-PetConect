import { Provider } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import banner from "../../assets/hero.webp";
import { useGetUserProfileQuery } from "../../store/api/apiSlice";
import { store } from "../../store/store";
import CreatePetForm from "./components/CreatePetForm";
import PetCard from "./components/PetCard";

const UserProfile = () => {
  const { data: user } = useGetUserProfileQuery();
  console.log(user);

  const MySwal = withReactContent(Swal);

  /* const handleEditUser = () => {
		MySwal.fire({
			html: <EditUserForm />,
			showConfirmButton: false,
			width: 'fit-content',
			scrollbarPadding: false,
		});
	}; */

  const handleCreatePet = () => {
    MySwal.fire({
      html: (
        <Provider store={store}>
          <CreatePetForm />
        </Provider>
      ),
      showConfirmButton: false,
      width: "fit-content",
      scrollbarPadding: false,
    });
  };

  return (
    <div className="max-w-[1300px] w-full mx-auto py-20">
      <div className="w-full h-80">
        <img src={banner} alt="banner" className="object-cover w-full h-full" />
      </div>
      <div className="flex items-start gap-10">
        <div className="bg-tertiary w-80 h-[500px] relative flex flex-col justify-between">
          <img
            src={user?.user_avatar}
            alt="avatar"
            className="absolute inset-0 object-cover w-40 h-40 translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          <div className="text-white mt-24 flex flex-col mx-auto w-[80%]">
            <h6 className="self-center text-2xl font-bold font-title">
              {user?.user_full_name}
            </h6>
            <p className="text-lg text-center font-title">
              {user?.user_address}
            </p>
            <div className="mt-5 font-title">
              <p>{user?.user_country}</p>
              <p>{user?.user_city}</p>
              <p>{user?.user_email}</p>
            </div>
          </div>
          <button className="py-3 font-bold text-white transition-all bg-opacity-50 bg-tertiary-dark hover:bg-opacity-80 font-title">
            Editar perfil
          </button>
        </div>
        <div className="flex-1 min-h-[600px] flex flex-col">
          <div className="flex items-center justify-between p-6">
            <h4 className="text-4xl font-semibold text-center text-tertiary">
              Mis mascotas
            </h4>
            <button
              className="px-5 py-2 font-bold transition-all rounded-lg shadow-md bg-secondary hover:bg-secondary-light font-title"
              onClick={handleCreatePet}
            >
              Agregar mascotas
            </button>
          </div>
          <hr className="h-[2px] bg-primary-light border-none mb-10" />
          <div className="grid flex-1 grid-cols-2 place-items-center gap-y-10">
            {user?.pets?.map((info, index) => (
              <PetCard info={info} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
