import { useAppSelector } from "../store/hooks";
import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  const { user } = useAppSelector((state) => state?.auth);

  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedRoutes;
