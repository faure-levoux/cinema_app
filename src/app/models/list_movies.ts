import { Movie } from "./movie";

export class Movies {
    Movies: Movie[];

    constructor(listMovies: Movie[]) {
        this.Movies = [];
        for(let i = 0; i < listMovies.length; i++) {
            let movie = new Movie(listMovies[i]);
            this.Movies.push(movie);
        }
    }

    getMovies() {
        return this.Movies;
    }
}