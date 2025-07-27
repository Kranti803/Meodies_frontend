import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";
import { SidebarProvider } from "./context/sideBarContext";
import { ToastContainer } from "react-toastify";
import { useGetProfileQuery } from "./services/authApi";
import SplashScreen from "./pages/SplashScreen";
import { setUser } from "./features/auth/authSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./store/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetProfileQuery();
  const [isAuthResolved, setIsAuthResolved] = useState(false);
  
  useEffect(() => {
    if (isSuccess && data?.user) dispatch(setUser(data?.user));
    if (!isLoading) {
      setIsAuthResolved(true);
    }
  }, [data, isSuccess, dispatch, isLoading]);

  if (!isAuthResolved) return <SplashScreen />;
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </SidebarProvider>
  );
};

export default App;
