import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Error404 from "../layout/Error404";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PetProfile from "../pages/PetProfile/PetProfile";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/UserProfile/UserProfile";
import Matchs from "../pages/matchs/Matchs";

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
