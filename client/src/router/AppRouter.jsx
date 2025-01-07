import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx";
import Error404 from "../layout/Error404.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import PetProfile from "../pages/PetProfile/PetProfile.jsx";
import Register from "../pages/Register/Register.jsx";
import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import Matchs from "../pages/matchs/Matchs.jsx";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error404 />}>
      <Route index element={<Home />} />
      <Route
        path="/user-profile"
        element={
          <ProtectedRoute redirectTo="/auth/login">
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/matchs" element={<Matchs />} />
      <Route path="/pet-profile/:id" element={<PetProfile />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
