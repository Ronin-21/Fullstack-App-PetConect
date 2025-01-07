import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../store/auth/authSlice.js";
import { useEffect } from "react";

const ProtectedRoute = ({ redirectTo, children }) => {
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(redirectTo);
    }
  }, [token]);

  return children;
};

export default ProtectedRoute;
