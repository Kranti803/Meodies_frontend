export interface IUser {
  _id: string; // converted from Types.ObjectId
  name: string;
  email: string;
  photoURL?: string;
  role: "user" | "admin";
  isVerified: boolean;
  provider: "local" | "google";
  googleId?: string;
  recentlyPlayedSongs?: string[];
  playlists?: string[];
  likedSongs: string[];
}

//payloads
export interface IRegisterPlayload {
  name: string;
  email: string;
  password: string;
}
export interface ILoginPayload {
  email: string;
  password: string;
}
//responses
export interface IRegisterResponse {
  success: boolean;
  message: string;
}
export interface ILoginResponse {
  success: boolean;
  message: string;
  user: IUser;
}
