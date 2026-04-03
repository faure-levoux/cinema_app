import { Component, computed, effect, HostListener, OnInit, output, OutputEmitterRef, signal } from '@angular/core';
import { Movie } from '../../models/movie';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from '../../components/movie/movie';
import { AsyncPipe } from '@angular/common';
import { SearchBar } from '../../components/search-bar/search-bar';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { URL_API } from '../../global';

@Component({
  selector: 'app-first-page',
  imports: [MovieComponent, AsyncPipe, FormsModule, ScrollingModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css',
})

export class FirstPage {
  searchText = signal("");
  activated = false;
  noteMinimum = 0;
  sort = "list_IdAllocine_available_NoteSpectateur_desc";
  page = "app-first-page";
  spread = 60;
  minId = signal(0);
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  nextPage(): void  {
    this.minId.update((currentValue) => currentValue + this.spread);
  }
  
  lastPage(): void  {
    this.minId.update((currentValue) => {
      const result = currentValue - this.spread;
      if (result < 0 ) {
        return 0
      } else {
        return result;
      }
    });
  }

  updateMovies = effect(() => {
    this.request(URL_API + '/' + this.sort + '?from=' + this.minId() + '&to=' + (this.minId() + this.spread) + '&noteMinPub=' + this.noteMinimum );
  })

  request(url: string): void {
    this.movies$ = this.http.get<string>(url).pipe(
    map(v => {
      const movies: Movie[] = [];
      for(let i = 0; i < v.length; i++) {
        let movie = new Movie([parseInt(v[i][0]), parseInt(v[i][1]), JSON.parse(v[i][2]), JSON.parse(v[i][3]), JSON.parse(v[i][4]), v[i][5] == undefined ? 0 : parseFloat(v[i][5]), v[i][6] == undefined ? 0 : parseFloat(v[i][6]), parseFloat(v[i][7]), parseInt(v[i][8]), parseInt(v[i][9]), v[i][10], parseInt(v[i][11]), new Date(v[i][12]), JSON.parse(v[i][13]), v[i][14], JSON.parse(v[i][15]) == undefined ? false : JSON.parse(v[i][15])]);
        movies.push(movie);
      }
      return movies;
    }));
  }

  sortingMoviesFromChoice(choice: string) {
    this.sort = choice;
    this.minId.update(() => 0);
    this.request(URL_API + this.sort + '?from=' + this.minId() + '&to=' + (this.minId() + this.spread) + '&noteMinPub=' + this.noteMinimum );
  }

  noteSelected(nb: string): void {
    this.noteMinimum = parseFloat(nb);
    this.minId.update(() => 0);
    this.request(URL_API + this.sort + '?from=' + this.minId() + '&to=' + (this.minId() + this.spread) + '&noteMinPub=' + this.noteMinimum );
  }
  
  search(txt: string): void {
    this.searchText.update(() => txt);
    if (txt != "") {
      this.request(URL_API + '/search_movie_from_title?title=' + this.searchText() + '&from=' + this.minId() + '&to=' + (this.minId() + this.spread) + '&noteMinPub=' + this.noteMinimum);
    } else {
      this.request(URL_API + this.sort + '?from=' + this.minId() + '&to=' + (this.minId() + this.spread) + '&noteMinPub=' + this.noteMinimum );
    }
  }

  activation(): void {
    if (this.activated == true) {
      this.activated = false;
    } else {
      this.activated = true;
    }
  }

  movies$!: Observable<Movie[]>;
}
