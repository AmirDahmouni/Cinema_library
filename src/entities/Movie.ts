
export default interface IMovie {
  id: number;
  title: string;
  name: string;
  original_title: string;
  adult: boolean;
  poster_path: string;
  original_language: string;
  media_type: string;
  backdrop_path: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  overview: string;
  results: any[]

}
