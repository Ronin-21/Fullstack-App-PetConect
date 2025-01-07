import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as yup from "yup";
import { useRegisterUserMutation } from "../../../store/api/apiSlice.js";

const schema = yup
  .object({
    user_full_name: yup
      .string()
      .required("Por favor complete el campo requerido"),
    user_email: yup
      .string()
      .email("Por favor ingrese un email válido")
      .required("Por favor complete el campo requerido"),
    user_password: yup
      .string()
      .matches(
        /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
        "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula"
      )
      .required(),
    confirmPassword: yup.string().oneOf([yup.ref("user_password"), null]),
    user_country: yup
      .string()
      .required("Por favor complete el campo requerido"),
    user_city: yup.string().required("Por favor complete el campo requerido"),
    user_address: yup
      .string()
      .required("Por favor complete el campo requerido"),
    user_avatar: yup
      .mixed()
      .test("required", "Por favor suba una imagen", (value) => {
        return value[0]?.name && !undefined;
      }),
  })
  .required();

const RegisterForm = () => {
  const [registerUser, { isSuccess, isError }] = useRegisterUserMutation();

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

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
    formData.append("user_full_name", data.user_full_name);
    formData.append("user_email", data.user_email);
    formData.append("user_password", data.user_password);
    formData.append("user_country", data.user_country);
    formData.append("user_city", data.user_city);
    formData.append("user_address", data.user_address);
    formData.append("user_avatar", data.user_avatar[0]);

    registerUser(formData);

    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      MySwal.fire({
        title: "Registro exitoso!!",
        icon: "success",
        scrollbarPadding: false,
        didClose: () => navigate("/auth/login"),
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
      className="flex flex-col items-center justify-center w-full gap-5"
    >
      <div className="w-full">
        <input
          {...register("user_full_name")}
          placeholder="Nombre completo"
          autoFocus
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_full_name?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_email")}
          placeholder="Email"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_email?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_password")}
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_password?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirmar contraseña"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.confirmPassword && "Las contraseñas no coinciden!"}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_country")}
          placeholder="País"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_country?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_city")}
          placeholder="Ciudad"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_city?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_address")}
          placeholder="Calle"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_address?.message}
        </p>
      </div>
      <div className="w-full">
        <input
          {...register("user_avatar")}
          type="file"
          accept=".jpg, .jpeg, .png"
          className="w-full p-3 bg-white border-b outline-none border-primary-light"
        />
        <p className="text-sm text-center text-tertiary">
          {errors.user_avatar?.message}
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
export default RegisterForm;
