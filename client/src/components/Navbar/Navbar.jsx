import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/LogoPetConnect.svg";
import { useLazyLogoutUserQuery } from "../../store/api/apiSlice";
import { selectCurrentToken } from "../../store/auth/authSlice";

const Navbar = () => {
  // const [logout] = useLogoutUserMutation();
  const [trigger] = useLazyLogoutUserQuery();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const token = useSelector(selectCurrentToken);

  return (
    <nav className="fixed z-50 flex items-center justify-around w-full h-20 p-3 py-2 shadow-md bg-primary-light">
      <div className="flex flex-grow h-full">
        <Link to="/" className="m-2 ">
          <img src={logo} alt="logo" className="object-cover h-full" />
        </Link>
      </div>
      <div className="relative flex lg:hidden">
        {!isOpenMenu ? (
          <div className="h-8 border-2 rounded cursor-pointer text-body-light">
            <IoIosMenu
              onClick={() => setIsOpenMenu(true)}
              className="w-8 h-8 text-body-light"
            />
          </div>
        ) : (
          <>
            <IoMdClose
              onClick={() => setIsOpenMenu(false)}
              className="w-8 h-8 text-body-light"
            />
            <div className="absolute -left-[88.5vw] sm:-left-[95vw] md:-left-[94.5vw] lg:hidden flex flex-col justify-around bg-primary-light w-[100vw] h-[30dvh] mt-12">
              <div
                onClick={() => setIsOpenMenu(false)}
                className="p-3 mt-3  bg-primary-light  h-[100vh] w-full pl-5 md:pl-9"
              >
                <div className="flex flex-col w-full gap-3 px-3 py-3 font-title lg:text-xl">
                  <Link className="hover:bg-primary hover:text-white" to="/">
                    Home
                  </Link>
                  <Link
                    className="hover:bg-primary hover:text-white"
                    to="/matchs"
                  >
                    Mascotas
                  </Link>
                </div>
                {!token ? (
                  <div className="flex gap-4 px-2 mb-0 font-title place-items-center">
                    <button className="px-3 py-3 text-white transition-all rounded-md shadow-md bg-primary hover:bg-primary-dark">
                      <Link to="/auth/login">Ingresar</Link>
                    </button>
                    <button className="px-3 py-3 transition-all bg-white rounded-md shadow-md text-primary hover:bg-hite-grey">
                      <Link to="/auth/register">Registrarse</Link>
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link
                      className="px-3 py-3 text-white transition-all rounded-md shadow-md bg-primary hover:bg-primary-dark"
                      to="/user-profile"
                    >
                      Mi Perfil
                    </Link>
                    <button
                      className="px-3 py-3 transition-all bg-white rounded-md shadow-md text-primary hover:bg-hite-grey"
                      onClick={() => trigger()}
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="items-center justify-between flex-grow hidden lg:flex">
        <div className="flex lg:gap-5 font-title lg:text-xl">
          <Link to="/">Home</Link>
          <Link to="/matchs">Mascotas</Link>
        </div>
        {!token ? (
          <div className="flex gap-4 px-2 mb-0 font-title place-items-center">
            <button className="px-3 py-3 text-white transition-all rounded-md shadow-md bg-primary hover:bg-primary-dark">
              <Link to="/auth/login">Ingresar</Link>
            </button>
            <button className="px-3 py-3 transition-all bg-white rounded-md shadow-md text-primary hover:bg-hite-grey">
              <Link to="/auth/register">Registrarse</Link>
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              className="px-3 py-3 text-white transition-all rounded-md shadow-md bg-primary hover:bg-primary-dark"
              to="/user-profile"
            >
              Mi Perfil
            </Link>
            <button
              className="px-3 py-3 transition-all bg-white rounded-md shadow-md text-primary hover:bg-hite-grey"
              onClick={() => trigger()}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
