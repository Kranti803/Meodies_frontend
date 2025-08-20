import {
  Home,
  Compass,
  User,
  Clock,
  Heart,
  Repeat,
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
        name: "Recently Added",
        link: "/recently_played",
      },
      {
        icon: Repeat,
        name: "Most Played",
        link: "/most_played",
      },
    ],
  },
  {
    title: "Playlist and Favourites",
    items: [
      {
        icon: ListMusic,
        name: "Playlists",
        link: "/playlists",
      },
      {
        icon: Heart,
        name: "Favourites",
        link: "/favourites",
      },
      {
        icon: ListPlus,
        name: "Add Playlist",
        link: "/add_playlist",
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
