import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../../models/movie';
import { map } from 'rxjs/internal/operators/map';
import { AsyncPipe } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie';
import { URL_API } from '../../global';
import { Movies } from '../../models/list_movies';

@Component({
  selector: 'app-movies-not-want-to-see',
  imports: [AsyncPipe, MovieComponent],
  templateUrl: './movies-not-want-to-see.html',
  styleUrl: './movies-not-want-to-see.css',
})
export class MoviesNotWantToSee {
  constructor(private http: HttpClient) {}

  movies!: Observable<Movie[]>;
  
ngOnInit(): void {
    this.movies = this.http.get<Movie[]>(URL_API + '/already_dont_want_to_see_movie').pipe(
      map(v => new Movies(v).getMovies()));
  }
}
