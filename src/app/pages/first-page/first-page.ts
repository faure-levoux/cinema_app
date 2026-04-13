import { Component, signal } from '@angular/core';
import { Movie } from '../../models/movie';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from '../../components/movie/movie';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { URL_API } from '../../global';
import { Movies } from '../../models/list_movies';

@Component({
  selector: 'app-first-page',
  imports: [MovieComponent, AsyncPipe, FormsModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css',
})

export class FirstPage {
  page = "app-first-page";
  searchText = signal("");
  noteMinimum = 0;
  sort = "list_IdAllocine_available_NoteSpectateur_desc";
  spread = 60;
  minId = signal(0);
  movies!: Observable<Movie[]>;

  constructor(private http: HttpClient) {}

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

  request(url: string): void {
    this.movies = this.http.get<Movie[]>(url).pipe(
    map(v => {
      return new Movies(v).getMovies()
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

  ngOnInit() {
    this.request(URL_API + '/' + this.sort + '?from=' + this.minId() + '&to=' + (this.minId() + this.spread) + '&noteMinPub=' + this.noteMinimum );
  }
}
