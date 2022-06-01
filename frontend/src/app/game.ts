import { Platform } from "./platform";

export interface Game {
  id: number;
  name: string;
  rating: number;
  summary: string;
  storyline: string;
  cover: {
    id: number,
    image_id: string,
    url: string
  }
  // platforms: {
  //   id: number,
  //   name: string
  // }
  // platforms: string[];
  platforms: Platform[];
}
