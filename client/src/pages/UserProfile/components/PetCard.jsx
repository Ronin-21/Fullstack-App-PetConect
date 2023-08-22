import { Provider } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEliminatePetMutation } from "../../../store/api/apiSlice";
import { store } from "../../../store/store";
import EditPetForm from "./EditPetForm";

const PetCard = ({ info }) => {
  const MySwal = withReactContent(Swal);

  const [eliminatePet] = useEliminatePetMutation();

  const handleEditPet = () => {
    MySwal.fire({
      html: (
        <Provider store={store}>
          <EditPetForm id={info.id} />
        </Provider>
      ),
      showConfirmButton: false,
      width: "fit-content",
      scrollbarPadding: false,
    });
  };

  const handleEliminatePet = () => {
    MySwal.fire({
      title: "Deseas eliminar esta mascota??",
      scrollbarPadding: false,
      showDenyButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminatePet(info.id);
      }
    });
  };

  return (
    <div className="flex flex-col min-w-[250px] w-full max-w-[400px] h-[420px] rounded-lg shadow-lg hover:shadow-primary hover:scale-[1.05] transition-all bg-white overflow-hidden">
      <div className="w-full">
        <img
          src={info?.pet_avatar}
          alt="pet image"
          className="object-cover w-full h-40"
        />
      </div>
      <div className="flex flex-col justify-between h-full gap-2 p-4 text-center">
        <p className="text-4xl">{info?.pet_full_name}</p>
        <p className="text-body-light card-text">{info?.pet_description}</p>
        <div className="flex self-end gap-3">
          <button
            className="p-2 text-xl font-bold transition-all bg-white text-primary font-title border-primary hover:border-b-2"
            onClick={handleEditPet}
          >
            Editar
          </button>
          <button
            className="p-2 text-xl font-bold transition-all bg-white text-tertiary font-title border-tertiary hover:border-b-2"
            onClick={handleEliminatePet}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
export default PetCard;
