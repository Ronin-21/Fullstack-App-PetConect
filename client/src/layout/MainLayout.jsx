import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="text-body bg-white-grey">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
