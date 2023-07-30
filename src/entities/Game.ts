import Genre from './Genre';
import { IPlatform } from './Platform';
import Publisher from './Publisher';

export default interface IGame {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}
