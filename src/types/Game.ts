import Developer from "./Developer";
import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  description_raw: string;
  background_image: string;
  parent_platforms: { id: string; platform: Platform }[];
  platforms: Platform[];
  rating: number;
  website: string;
  released: string;
  updated: string;
  developers: Developer[];
  publishers: Publisher[];
}
