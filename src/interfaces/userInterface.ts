// export interface IRegisterUserResponse {
//   _id: string; // converted from Types.ObjectId
//   name: string;
//   email: string;
//   photoURL?: string;
//   role: "user" | "admin";
//   isVerified: boolean;
//   provider: "local" | "google";
//   googleId?: string;
//   recentlyPlayedSongs?: string[];
//   playlists?: string[];
//   likedSongs: string[];
// }
export interface IRegisterUserResponse {
  success: boolean;
  message: string;
}
export interface IRegisterPlayload {
  name: string;
  email: string;
  password: string;
}
