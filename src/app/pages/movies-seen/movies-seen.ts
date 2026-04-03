import { Component, Input } from '@angular/core';
import { MovieComponent } from '../../components/movie/movie';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { URL_API } from '../../global';


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


  movies$!: Observable<Movie[]>;
  
ngOnInit(): void {
    this.movies$ = this.http.get<string>(URL_API + '/already_seen_movie').pipe(
      map(v => {
        const movies: Movie[] = [];
        for(let i = 0; i < v.length; i++) {
          let movie = new Movie([parseInt(v[i][0]), parseInt(v[i][1]), JSON.parse(v[i][2]), JSON.parse(v[i][3]), JSON.parse(v[i][4]), v[i][5] == undefined ? 0 : parseFloat(v[i][5]), v[i][6] == undefined ? 0 : parseFloat(v[i][6]), parseFloat(v[i][7]), parseInt(v[i][8]), parseInt(v[i][9]), v[i][10], parseInt(v[i][11]), new Date(v[i][12]), JSON.parse(v[i][13]) == undefined ? false : JSON.parse(v[i][13]), v[i][14], JSON.parse(v[i][15]) == undefined ? false : JSON.parse(v[i][15])]);
          movies.push(movie);
        }
        return movies;
      }));
  }
}
