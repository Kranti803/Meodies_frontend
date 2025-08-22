interface ISongUrl {
  public_id: string;
  url: string;
}

interface IImageUrl {
  public_id: string;
  url: string;
}

export interface Isong {
  _id?: string;
  title: string;
  image: IImageUrl;
  songUrl: ISongUrl;
  duration: number;
  artists: string[];
  year: number;
  album: string;
  playCount?: number;
  trending: boolean;
}
