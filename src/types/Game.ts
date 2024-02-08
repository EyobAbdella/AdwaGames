import Genre from "./Genre";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: string[];
  description_raw: string;
  background_image: string;
  parent_platform: any;
  rating: number;
}
