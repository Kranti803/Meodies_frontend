interface IImageUrl {
  public_id: string;
  url: string;
}
export interface Iartist {
  _id?: string;
  name: string;
  image: IImageUrl;
  relatedSongs?: string[];
}
