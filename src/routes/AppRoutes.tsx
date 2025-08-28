import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import RoleBasedRoutes from "./RoleBasedRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import SplashScreen from "../pages/SplashScreen";
import EmailVerificationStatus from "../pages/EmailVarificationStatus";

// Lazy load pages for optimization
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Premium = lazy(() => import("../pages/Premium"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const PasswordSuccess = lazy(() => import("../pages/PasswordSuccess"));
const AdminDashboard = lazy(() => import("../pages/Dashboard"));
const CreatePlaylist = lazy(() => import("../pages/CreatePlaylist"));
const Playlist = lazy(() => import("../pages/Playlist"));
const AllPlaylists = lazy(() => import("../pages/Allplaylists"));
const EmailVerification = lazy(() => import("../pages/EmailVerification"));
const Discover = lazy(() => import("../pages/Discover"));
const AllArtists = lazy(() => import("../pages/AllArtists"));
const ArtistSongs = lazy(() => import("../pages/ArtistSongs"));
const PlaylistDetails = lazy(() => import("../pages/PlaylistDetails"));
const FavouriteSongs = lazy(() => import("../pages/FavouriteSongs"));
const RecentlyPlayedSongs = lazy(() => import("../pages/RecentlyPlayedSongs"));
const SearchResult = lazy(() => import("../pages/SearchResult"));

// Helper wrapper for Suspense
const withSuspense = (Component: React.FC) => (
  <Suspense fallback={<SplashScreen />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "", element: withSuspense(Home) },
          { path: "about", element: withSuspense(About) },
          { path: "contact", element: withSuspense(Contact) },
          { path: "premium", element: withSuspense(Premium) },
          { path: "createplaylist", element: withSuspense(CreatePlaylist) },
          { path: "allplaylists", element: withSuspense(AllPlaylists) },
          { path: "playlist", element: withSuspense(Playlist) },
          { path: "discover", element: withSuspense(Discover) },
          { path: "artists", element: withSuspense(AllArtists) },
          {
            path: "artist/:artistName/:artistId",
            element: withSuspense(ArtistSongs),
          },
          {
            path: "playlist/:playlistId/details",
            element: withSuspense(PlaylistDetails),
          },
          { path: "favourites", element: withSuspense(FavouriteSongs) },
          {
            path: "recently_played",
            element: withSuspense(RecentlyPlayedSongs),
          },
          { path: "result/:searchText", element: withSuspense(SearchResult) },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <RoleBasedRoutes />,
    children: [{ path: "dashboard", element: withSuspense(AdminDashboard) }],
  },
  { path: "/login", element: withSuspense(Login) },
  { path: "/signup", element: withSuspense(SignUp) },
  { path: "/forgotpassword", element: withSuspense(ForgotPassword) },
  { path: "/resetpassword/:resetToken", element: withSuspense(ResetPassword) },
  { path: "/verify_email", element: withSuspense(EmailVerification) },
  {
    path: "/email_verify/:userId/:token",
    element: withSuspense(EmailVerificationStatus),
  },
  { path: "/passwordsuccess", element: withSuspense(PasswordSuccess) },
]);
