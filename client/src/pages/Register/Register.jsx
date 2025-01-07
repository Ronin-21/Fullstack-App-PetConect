import { Link } from "react-router-dom";
import dog2 from "../../assets/img/dog2.webp";
import RegisterForm from "./components/RegisterForm.jsx";

const Register = () => {
  return (
    <div className="grid w-full min-h-screen place-items-center">
      <div className="flex flex-row-reverse w-[900px] min-h-[600px] rounded shadow-primary shadow-2xl">
        <div className="flex flex-col items-center justify-center w-1/2 gap-5 p-10 bg-white">
          <h4 className="text-4xl font-semibold text-primary">Registro</h4>
          <RegisterForm />
          <p>
            Ya tienes una cuenta?{" "}
            <Link to="/auth/login" className="font-semibold text-primary">
              Login
            </Link>
          </p>
        </div>
        <div className="relative w-1/2 bg-secondary-light rounded-s">
          <img src={dog2} alt="dog" className="absolute bottom-0 w-3/4 " />
        </div>
      </div>
    </div>
  );
};
export default Register;
