import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as yup from "yup";
import { useCreatePetMutation } from "../../../store/api/apiSlice.js";

const schema = yup
  .object({
    pet_full_name: yup
      .string()
      .required("Por favor complete el campo requerido"),
    pet_description: yup
      .string()
      .max(300)
      .required("Por favor complete el campo requerido"),
    pet_breed: yup.string().required("Por favor complete el campo requerido"),
    pet_gender: yup.string().required("Por favor seleccione un género"),
    pet_age: yup
      .number()
      .positive()
      .typeError("Por favor ingrese un número válido")
      .required("Por favor complete el campo requerido"),
    pet_weight: yup
      .number()
      .positive()
      .typeError("Por favor ingrese un número válido")
      .required("Por favor complete el campo requerido"),
    pet_nationality: yup
      .string()
      .required("Por favor complete el campo requerido"),
    pet_chip: yup.boolean(),
    pet_avatar: yup
      .mixed()
      .test("required", "Por favor suba una imagen", (value) => {
        return value[0]?.name && !undefined;
      }),
  })
  .required();

const CreatePetForm = () => {
  const [createPet, { isSuccess, isError }] = useCreatePetMutation();
  const MySwal = withReactContent(Swal);

  // Convertir imagen a Base64 para preview
  const [base64Image, setBase64Image] = useState("");

  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setBase64Image(reader.result);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
  };

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
    let formData = new FormData();
    formData.append("pet_full_name", data.pet_full_name);
    formData.append("pet_description", data.pet_description);
    formData.append("pet_breed", data.pet_breed);
    formData.append("pet_gender", data.pet_gender);
    formData.append("pet_age", data.pet_age);
    formData.append("pet_chip", data.pet_chip);
    formData.append("pet_weight", data.pet_weight);
    formData.append("pet_nationality", data.pet_nationality);
    formData.append("pet_avatar", data.pet_avatar[0]);

    createPet(formData);

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
      className="flex flex-col items-center gap-5 max-w-[1300px] h-full"
    >
      <div className="w-full">
        <input
          {...register("pet_full_name")}
          placeholder="Nombre de la mascota"
          autoFocus
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_full_name?.message}
        </p>
      </div>
      <div className="w-full">
        <textarea
          {...register("pet_description")}
          placeholder="Escriba una breve descripción"
          className="w-full p-3 bg-white border-b outline-none resize-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_description?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_breed")}
          placeholder="Raza"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_breed?.message}
        </p>
      </div>
      <div className="w-full">
        <select
          {...register("pet_gender")}
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        >
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
        <p className="text-sm text-center text-tertiary">
          {errors.pet_gender?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_age")}
          placeholder="Edad"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_age?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_weight")}
          placeholder="Peso"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_weight?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("pet_nationality")}
          placeholder="Nacionalidad"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_nationality?.message}
        </p>
      </div>
      <div className="flex items-center w-full gap-4">
        <label htmlFor="chip">Chip</label>
        <input {...register("pet_chip")} type="checkbox" id="chip" />
      </div>
      <div className="flex flex-col items-center w-full gap-1">
        <input
          {...register("pet_avatar")}
          type="file"
          accept=".jpg, .jpeg, .png"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
          onChange={convertToBase64}
        />
        <p className="text-sm text-center text-tertiary">
          {errors.pet_avatar?.message}
        </p>
        {base64Image == "" || base64Image == null ? (
          ""
        ) : (
          <img className="w-auto h-28" src={base64Image} alt="avatar" />
        )}
      </div>
      <button
        type="submit"
        className="bg-primary px-5 py-3 rounded hover:bg-primary-dark transition-all text-secondary-light shadow-md min-w-[250px] mt-2 outline-none"
      >
        Enviar
      </button>
    </form>
  );
};
export default CreatePetForm;
