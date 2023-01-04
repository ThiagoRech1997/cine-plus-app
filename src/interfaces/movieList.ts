import { MovieItem } from "./movieItem";

export interface MovieList {
    id: number;
    category: string;
    items: Array<MovieItem>;
}