import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../../global';

@Component({
  selector: 'app-movie',
  imports: [DatePipe],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class MovieComponent {
  @Input() movie!: Movie;
  @Input() page!: string;
  src_url_poster = URL_API;
  constructor(private http: HttpClient) {}

  
  to_not_see(): void {
    if (this.movie.Film_ANePasVoir == true) {
      this.movie.Film_ANePasVoir = false;
      this.http.get<void>(URL_API + "/update_delete_movie_not?id=" + this.movie.Film_IdAllocine).subscribe();
    } else {
      this.movie.Film_ANePasVoir = true;
      this.http.get<void>(URL_API + "/update_delete_movie?id=" + this.movie.Film_IdAllocine).subscribe();
    }
  }
  
  deja_vu(): void {
    if (this.movie.Film_Vue == true) {
      this.movie.Film_Vue = false;
      this.http.get<void>(URL_API + "/update_seen_movie_not?id=" + this.movie.Film_IdAllocine).subscribe();
    } else {
      this.movie.Film_Vue = true;
      this.http.get<void>(URL_API + "/update_seen_movie?id=" + this.movie.Film_IdAllocine).subscribe();
    }
  }


}



