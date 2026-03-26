import { Component } from '@angular/core';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-first-page',
  imports: [Movie],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css',
})
export class FirstPage {}
