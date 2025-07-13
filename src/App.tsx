import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";
import { SidebarProvider } from "./context/sideBarContext";

const App = () => {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default App;
