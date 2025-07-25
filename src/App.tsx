import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";
import { SidebarProvider } from "./context/sideBarContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </SidebarProvider>
  );
};

export default App;
