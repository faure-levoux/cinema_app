import { Movie } from "./movie";

export class Movies {
    Movies: Movie[];

    constructor(listMoviesStr: string) {
        this.Movies = [];
        for(let i = 0; i < listMoviesStr.length; i++) {
            let movie = new Movie(listMoviesStr[i]);
            this.Movies.push(movie);
        }
    }

    getMovies() {
        return this.Movies;
    }
}