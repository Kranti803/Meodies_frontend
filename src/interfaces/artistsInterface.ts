interface IImageUrl {
  public_id: string;
  url: string;
}
export interface Iartist {
  name: string;
  image: IImageUrl;
  relatedSongs?: string[];
}
