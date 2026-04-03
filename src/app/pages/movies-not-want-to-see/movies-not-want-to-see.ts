import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../../models/movie';
import { map } from 'rxjs/internal/operators/map';
import { AsyncPipe } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie';
import { URL_API } from '../../global';

@Component({
  selector: 'app-movies-not-want-to-see',
  imports: [AsyncPipe, MovieComponent],
  templateUrl: './movies-not-want-to-see.html',
  styleUrl: './movies-not-want-to-see.css',
})
export class MoviesNotWantToSee {
  constructor(private http: HttpClient) {}


  movies$!: Observable<Movie[]>;
  
ngOnInit(): void {
    this.movies$ = this.http.get<string>(URL_API + '/already_dont_want_to_see_movie').pipe(
      map(v => {
        const movies: Movie[] = [];
        for(let i = 0; i < v.length; i++) {
          let movie = new Movie([parseInt(v[i][0]), parseInt(v[i][1]), JSON.parse(v[i][2]), JSON.parse(v[i][3]), JSON.parse(v[i][4]), v[i][5] == undefined ? 0 : parseFloat(v[i][5]), v[i][6] == undefined ? 0 : parseFloat(v[i][6]), parseFloat(v[i][7]), parseInt(v[i][8]), parseInt(v[i][9]), v[i][10], parseInt(v[i][11]), new Date(v[i][12]), false, v[i][14], JSON.parse(v[i][15])]);
          movies.push(movie);
        }
        return movies;
      }));
  }
}
