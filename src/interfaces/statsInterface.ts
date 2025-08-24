export interface IstatsData {
  totalUsers: number;
  totalSongs: number;
  totalPlaylists: number;
  totalArtists: number;
}

export interface ItotalSongUploadedPerMonth {
  year: number;
  month: number;
  count: number;
}

export type ItotalUserGrowthPerMonth = ItotalSongUploadedPerMonth;
export interface Itop5PlayedSongsPerMonth {
  _id: string;
  title: string;
  playCount: number;
}

