import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as yup from "yup";
import { useUpdateUserMutation } from "../../../store/api/apiSlice";

const schema = yup
  .object({
    user_full_name: yup
      .string()
      .required("Por favor complete el campo requerido"),
    user_address: yup
      .string()
      .required("Por favor complete el campo requerido"),
    user_country: yup
      .string()
      .required("Por favor complete el campo requerido"),
    user_city: yup.string().required("Por favor complete el campo requerido"),
    user_email: yup
      .string()
      .email()
      .required("Por favor complete el campo requerido"),
  })
  .required();

const EditUserForm = () => {
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation();
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
    updateUser(data);
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
          {...register("user_full_name")}
          placeholder="Nombre de Usuario"
          autoFocus
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.user_full_name?.message}
        </p>
      </div>
      <div className="w-full">
        <textarea
          {...register("user_address")}
          placeholder="Dirección o Domicilio"
          className="p-3 outline-none w-full border-b border-primary-light bg-white resize-none"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.user_address?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_country")}
          placeholder="País"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.user_country?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_city")}
          placeholder="Ciudad"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.user_city?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_email")}
          placeholder="Email"
          className="p-3 outline-none w-full border-b border-primary-light bg-white"
        />
        <p className="text-tertiary text-center text-sm">
          {errors.user_email?.message}
        </p>
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
export default EditUserForm;
