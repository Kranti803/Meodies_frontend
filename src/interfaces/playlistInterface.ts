import type { Isong } from "./songInterface";

export interface Iplaylist {
  _id?: string;
  playlistName: string;
  description: string;
  songs?: Isong[];
}

