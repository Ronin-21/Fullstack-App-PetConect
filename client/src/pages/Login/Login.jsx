import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import cat1 from "../../assets/img/cat2.webp";
import { useLoginUserMutation } from "../../store/api/apiSlice";

const Login = () => {
  const [loginUser, { isSuccess, isError }] = useLoginUserMutation();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { user_email: email, user_password: password };

    loginUser(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      MySwal.fire({
        title: "Inicio de sesión exitoso!",
        icon: "success",
        scrollbarPadding: false,
        didClose: () => navigate("/user-profile"),
      });
    } else if (isError) {
      MySwal.fire({
        title: "Ha ocurrido un Error!",
        icon: "error",
        scrollbarPadding: false,
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="grid w-full min-h-screen place-items-center">
      <div className="flex flex-row-reverse w-[900px] min-h-[600px] shadow-lg rounded overflow-hidden">
        <div className="relative w-1/2 bg-primary-light rounded-s">
          <img
            src={cat1}
            alt="cat"
            className="absolute bottom-0 right-0 w-[80%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 gap-6 bg-white">
          <h2 className="text-4xl font-semibold text-primary">
            Iniciar sesión
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-3 transition-all rounded shadow-md outline-none bg-primary hover:bg-primary-dark text-secondary-light"
            >
              Iniciar sesión
            </button>
            <p className="mt-5">
              No tienes una cuenta?{" "}
              <Link to="/auth/login" className="font-semibold text-primary">
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
