import { Component, Input } from '@angular/core';
import { MovieComponent } from '../../components/movie/movie';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { URL_API } from '../../global';
import { Movies } from '../../models/list_movies';


@Component({
  selector: 'app-movies-seen',
  imports: [MovieComponent, AsyncPipe],
  templateUrl: './movies-seen.html',
  styleUrl: './movies-seen.css',
})
export class MoviesSeen {
  @Input() movie!: Movie;
  page = "app-movies-seen";

  constructor(private http: HttpClient) {}


  movies!: Observable<Movie[]>;
  
ngOnInit(): void {
    this.movies = this.http.get<string>(URL_API + '/already_seen_movie').pipe(
      map(v => new Movies(v).getMovies()));
  }
}
