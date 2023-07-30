export default interface ITrailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface ITrailerResponse {
  count: number;
  next: number | null;
  previous: number | null;
  result: ITrailer
}