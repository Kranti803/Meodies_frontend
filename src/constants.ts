import {
  Home,
  Compass,
  User,
  Clock,
  Heart,
  Repeat,
  ListMusic,
  ListPlus,
} from "lucide-react";

export const sideBarItems = [
  {
    title: "Menu",
    items: [
      {
        icon: Home,
        name: "Home",
        link:'/'
      },
      {
        icon: Compass,
        name: "Discover",
          link:'/discover'
      },

      {
        icon: User,
        name: "Artists",
          link:'/'
      },
    ],
  },
  {
    title: "Library",
    items: [
      {
        icon: Clock,
        name: "Recently Added",
          link:'/'
      },
      {
        icon: Repeat,
        name: "Most Played",
          link:'/'
      },
    ],
  },
  {
    title: "Playlist and Favourites",
    items: [
      {
        icon: ListMusic,
        name: "Playlists",
          link:'/'
      },
      {
        icon: Heart,
        name: "Favourites",
          link:'/'
      },
      {
        icon: ListPlus,
        name: "Add Playlist",
          link:'/'
      },
    ],
  },
];
