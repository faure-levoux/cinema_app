import { Component, inject, OnInit, output, OutputEmitterRef, signal } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from '../../components/movie/movie';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { SearchBar } from '../../components/search-bar/search-bar';
import { FormsModule, NgForm } from '@angular/forms';
import { interval, map, Observable } from 'rxjs';
import { transform } from 'typescript';
import { MovieListInterface } from '../../interfaces/movie_list';

@Component({
  selector: 'app-first-page',
  imports: [MovieComponent, AsyncPipe, SearchBar, FormsModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css',
})
export class FirstPage implements OnInit {
  count: number = 0;
  searchText = "";
  constructor(private http: HttpClient) {
  }


  increment() {
    this.count++;
  }
  movies$!: Observable<Movie[]>;

  ngOnInit(): void {
    this.movies$ = this.http.get<string>('http://localhost:5000/list_movies_from_to?from=2000&to=2250').pipe(
      map(v => {
        const movies: Movie[] = [];
        for(let i = 0; i < v.length; i++) {
          console.log(v[i]);
          let movie = new Movie([parseInt(v[i][0]), parseInt(v[i][1]), JSON.parse(v[i][2]), JSON.parse(v[i][3]), JSON.parse(v[i][4]), parseFloat(v[i][5]), parseInt(v[i][6]), parseFloat(v[i][7]), parseInt(v[i][8]), parseInt(v[i][9]), v[i][10], parseInt(v[i][11]), new Date(v[i][12]), JSON.parse(v[i][13]), v[i][14]]);
          movies.push(movie);
          console.log(movie);
        }
        return movies;
      }));
  }
}
