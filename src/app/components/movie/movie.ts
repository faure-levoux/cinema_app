import { Component, input, Input, NgModuleRef, output, OutputEmitterRef } from '@angular/core';
import { Movie } from '../../models/movie';
import { AsyncPipe, DatePipe, NgFor, NgForOf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie',
  imports: [DatePipe, RouterLink],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class MovieComponent {
  @Input() movie!: Movie;
  count = 0;

  
  to_not_see(): void {
    if (this.movie.Film_Vue == true) {
      this.movie.Film_ANePasVoir = false;
    } else {
      this.movie.Film_ANePasVoir = true;
    }
  }

  deja_vu(): void {
    if (this.movie.Film_Vue == true) {
      this.movie.Film_Vue = false;
    } else {
      this.movie.Film_Vue = true;
    }
  }


}



