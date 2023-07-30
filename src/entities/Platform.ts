export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IPlatformResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: IPlatform[]
}