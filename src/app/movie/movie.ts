import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [DatePipe],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class MovieComponent {
  @Input() movie!: Movie;
}



export { Movie };

