import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SplashScreen from "../pages/SplashScreen";
import Premium from "../pages/Premium";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import PasswordSuccess from "../pages/PasswordSuccess";
import AdminDashboard from "../pages/Dashboard";
import CreatePlaylist from "../pages/CreatePlaylist";
import Playlist from "../pages/Playlist";
import AllPlaylists from "../pages/Allplaylists";
import EmailVerification from "../pages/EmailVerification";
import RoleBasedRoutes from "./RoleBasedRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Discover from "../pages/Discover";
import AllArtists from "../pages/AllArtists";
import ArtistSongs from "../pages/ArtistSongs";
import PlaylistDetails from "../pages/PlaylistDetails";
import FavouriteSongs from "../pages/FavouriteSongs";
import RecentlyPlayedSongs from "../pages/RecentlyPlayedSongs";
import SearchResult from "../pages/SearchResult";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "premium",
            element: <Premium />,
          },
          {
            path: "createplaylist",
            element: <CreatePlaylist />,
          },
          {
            path: "allplaylists",
            element: <AllPlaylists />,
          },
          {
            path: "playlist",
            element: <Playlist />,
          },
          {
            path: "discover",
            element: <Discover />,
          },
          {
            path: "artists",
            element: <AllArtists />,
          },
          {
            path: "artist/:artistName/:artistId",
            element: <ArtistSongs />,
          },
          {
            path: "playlist/:playlistId/details",
            element: <PlaylistDetails />,
          },
          {
            path: "favourites",
            element: <FavouriteSongs />,
          },
          {
            path: "recently_played",
            element: <RecentlyPlayedSongs />,
          },
          {
            path: "result/:searchText",
            element: <SearchResult />,
          },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <RoleBasedRoutes />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <ResetPassword />,
  },
  {
    path: "/verify_email",
    element: <EmailVerification />,
  },
  {
    path: "/passwordsuccess",
    element: <PasswordSuccess />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
]);
