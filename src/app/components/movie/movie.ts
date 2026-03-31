import { Component, input, Input, NgModuleRef, output, OutputEmitterRef } from '@angular/core';
import { Movie } from '../../models/movie';
import { AsyncPipe, DatePipe, NgFor, NgForOf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  imports: [DatePipe],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class MovieComponent {
  @Input() movie!: Movie;
  @Input() page!: string;
  count = 0;
  constructor(private http: HttpClient) {}

  
  to_not_see(): void {
    if (this.movie.Film_ANePasVoir == true) {
      this.movie.Film_ANePasVoir = false;
      this.http.get<string>("http://87.106.196.204:5000/update_delete_movie_not?id=" + this.movie.Film_IdAllocine).subscribe();
    } else {
      this.movie.Film_ANePasVoir = true;
      this.http.get<string>("http://87.106.196.204:5000/update_delete_movie?id=" + this.movie.Film_IdAllocine).subscribe();
    }
  }
  
  deja_vu(): void {
    if (this.movie.Film_Vue == true) {
      this.movie.Film_Vue = false;
      this.http.get<string>("http://87.106.196.204:5000/update_seen_movie_not?id=" + this.movie.Film_IdAllocine).subscribe();
    } else {
      this.movie.Film_Vue = true;
      this.http.get<string>("http://87.106.196.204:5000/update_seen_movie?id=" + this.movie.Film_IdAllocine).subscribe();
    }
  }


}



