import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from '../../components/movie/movie';
import { AsyncPipe } from '@angular/common';
import { SearchBar } from '../../components/search-bar/search-bar';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-first-page',
  imports: [MovieComponent, AsyncPipe, SearchBar, FormsModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css',
})

export class FirstPage implements OnInit {
  searchText = "";
  activated = false;
  noteMinimum = 0;
  sort = "notePub";
  page = "app-first-page";
  constructor(private http: HttpClient) {}


  sortingMoviesFromChoice(choice: string) {
    if (choice == "sortByNotePub") {
      this.movies$ = this.movies$.pipe(
        map(movies => movies.sort((a, b) => b.Film_NoteSpectateur - a.Film_NoteSpectateur))
      )
    }
    else if (choice == "sortByNotePre") {
      this.movies$ = this.movies$.pipe(
        map(movies => movies.sort((a, b) => b.Film_NotePresse - a.Film_NotePresse))
      )
    }
    else if (choice == "sortByNbNotePre") {
      this.movies$ = this.movies$.pipe(
        map(movies => movies.sort((a, b) => b.Film_NbAvisPresse - a.Film_NbAvisPresse))
      )
    }
    else if (choice == "sortByNbNotePub") {
      this.movies$ = this.movies$.pipe(
        map(movies => movies.sort((a, b) => b.Film_NbNoteSpectateur - a.Film_NbNoteSpectateur))
      )
      
    }
  }

  noteSelected(nb: string): void {
    this.noteMinimum = parseFloat(nb);
  }

  activation(): void {
    if (this.activated == true) {
      this.activated = false;
    } else {
      this.activated = true;
    }
  }

  movies$!: Observable<Movie[]>;

  ngOnInit(): void {
    this.movies$ = this.http.get<string>('http://localhost:5000/list_movies_from_to?from=5000&to=10250').pipe(
      map(v => {
        const movies: Movie[] = [];
        for(let i = 0; i < v.length; i++) {
          console.log(v[i][13]);
          console.log(v[i][15]);
          console.log(JSON.parse(v[i][15]));
          let movie = new Movie([parseInt(v[i][0]), parseInt(v[i][1]), JSON.parse(v[i][2]), JSON.parse(v[i][3]), JSON.parse(v[i][4]), v[i][5] == undefined ? 0 : parseFloat(v[i][5]), v[i][6] == undefined ? 0 : parseFloat(v[i][6]), parseFloat(v[i][7]), parseInt(v[i][8]), parseInt(v[i][9]), v[i][10], parseInt(v[i][11]), new Date(v[i][12]), JSON.parse(v[i][13]), v[i][14], JSON.parse(v[i][15]) == undefined ? false : JSON.parse(v[i][15])]);
          console.log(movie)
          movies.push(movie);
        }
        movies.sort((a, b) => b.Film_NoteSpectateur - a.Film_NoteSpectateur)
        return movies;
      }));
  }
}
