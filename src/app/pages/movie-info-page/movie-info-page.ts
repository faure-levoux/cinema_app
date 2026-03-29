import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info-page',
  imports: [],
  templateUrl: './movie-info-page.html',
  styleUrl: './movie-info-page.css',
})
export class MovieInfoPage {
  urlIdMovie: string;

  constructor(private route: ActivatedRoute) {
    this.urlIdMovie = this.route.snapshot.params['url'];
  }
}
