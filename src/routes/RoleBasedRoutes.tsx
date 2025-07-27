import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../store/hooks";
const RoleBasedRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user?.role === "admin") return <Outlet />;
  return <Navigate to={"/"} replace />;
};

export default RoleBasedRoutes;
