import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as yup from "yup";
import { useUpdatePetMutation } from "../../../store/api/apiSlice";

const schema = yup
  .object({
    pet_full_name: yup
      .string()
      .required("Por favor complete el campo requerido"),
    pet_description: yup
      .string()
      .max(150)
      .required("Por favor complete el campo requerido"),
    pet_breed: yup.string().required("Por favor complete el campo requerido"),
    pet_gender: yup.string().required("Por favor complete el campo requerido"),
    pet_age: yup
      .number()
      .positive()
      .typeError("Por favor ingrese un número válido"),
    pet_weight: yup
      .number()
      .positive()
      .typeError("Por favor ingrese un número válido"),
    pet_nationality: yup
      .string()
      .required("Por favor complete el campo requerido"),
    pet_chip: yup.boolean(),
  })
  .required();

const EditPetForm = ({ id }) => {
  const [updatePet, { isSuccess, isError }] = useUpdatePetMutation();
  const MySwal = withReactContent(Swal);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const formSubmit = (data) => {
    updatePet({ id, petData: data });
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      MySwal.fire({
        title: "Registro exitoso!!",
        icon: "success",
        scrollbarPadding: false,
      });
    } else if (isError) {
      MySwal.fire({
        title: "Registro fallido!!",
        icon: "error",
        scrollbarPadding: false,
      });
    }
  }, [isSuccess, isError]);

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="flex flex-col items-center gap-5 max-w-[1300px] min-w-[400px] h-full"
    >
      <div className="w-full">
        <input
          {...register("pet_full_name")}
          placeholder="Nombre de la mascota"
          autoFocus
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.pet_full_name?.message}
        </p>
      </div>
      <div className="w-full">
        <textarea
          {...register("pet_description")}
          placeholder="Escriba una breve descripción"
          className="p-3 outline-none w-full border-b border-primary-light bg-white resize-none"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.pet_description?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_breed")}
          placeholder="Raza"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.pet_breed?.message}
        </p>
      </div>
      <div className="w-full">
        <select
          {...register("pet_gender")}
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        >
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
        <p className="text-tertiary text-center text-sm">
          {errors.pet_gender?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_age")}
          placeholder="Edad"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.pet_age?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_weight")}
          placeholder="Peso"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.pet_weight?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_nationality")}
          placeholder="Nacionalidad"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.pet_nationality?.message}
        </p>
      </div>
      <div className="w-full flex items-center gap-4">
        <label htmlFor="chip">Chip</label>
        <input {...register("pet_chip")} type="checkbox" id="chip" />
      </div>
      <button
        type="submit"
        className="bg-primary px-5 py-3 rounded hover:bg-primary-dark transition-all text-secondary-light shadow-md min-w-[250px] mt-4 outline-none"
      >
        Enviar
      </button>
    </form>
  );
};
export default EditPetForm;
