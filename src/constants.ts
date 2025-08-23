import {
  Home,
  Compass,
  User,
  Clock,
  Heart,
  ListMusic,
  ListPlus,
  Music2,
  BarChart3,
  Upload,
  Image,
} from "lucide-react";

export const sideBarItems = [
  {
    title: "Menu",
    items: [
      {
        icon: Home,
        name: "Home",
        link: "/",
      },
      {
        icon: Compass,
        name: "Discover",
        link: "/discover",
      },

      {
        icon: User,
        name: "Artists",
        link: "/artists",
      },
    ],
  },
  {
    title: "Library",
    items: [
      {
        icon: Clock,
        name: "Recently Played",
        link: "/recently_played",
      },
      {
        icon: Heart,
        name: "Favourites",
        link: "/favourites",
      },
    ],
  },
  {
    title: "Playlists",
    items: [
      {
        icon: ListMusic,
        name: "Playlists",
        link: "/allplaylists",
      },

      {
        icon: ListPlus,
        name: "Add Playlist",
        link: "/createplaylist",
      },
    ],
  },
];

export const dashboardSideBarItems = [
  {
    title: "Dashboard",
    icon: Home,
  },
  {
    title: "Users",
    icon: User,
  },
  {
    title: "Songs",
    icon: Music2,
  },
  {
    title: "Artists",
    icon: BarChart3,
  },
  {
    title: "Upload Song",
    icon: Upload,
  },
  {
    title: "Add Artist Image",
    icon: Image,
  },
];
