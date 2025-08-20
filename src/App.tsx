import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";
import { SidebarProvider } from "./context/sideBarContext";
import { ToastContainer } from "react-toastify";
import { useGetProfileQuery } from "./services/authApi";
import SplashScreen from "./pages/SplashScreen";
import { setUser } from "./features/auth/authSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./store/hooks";
import { useGetAllSongsQuery } from "./services/songApi";

const App = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetProfileQuery();
  const { isLoading: isSongsLoading } = useGetAllSongsQuery();
  const [isAuthResolved, setIsAuthResolved] = useState(false);

  useEffect(() => {
    if (isSuccess && data?.user) dispatch(setUser(data?.user));
    if (!isLoading) {
      setIsAuthResolved(true);
    }
  }, [data, isSuccess, dispatch, isLoading]);

  if (!isAuthResolved || isSongsLoading) return <SplashScreen />;
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </SidebarProvider>
  );
};

export default App;
