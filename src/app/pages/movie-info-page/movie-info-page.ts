import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-movie-info-page',
  imports: [AsyncPipe],
  templateUrl: './movie-info-page.html',
  styleUrl: './movie-info-page.css',
})
export class MovieInfoPage {
  urlIdMovie: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.urlIdMovie = this.route.snapshot.params['url'];
  }

  infosMovie$!: Observable<String>;
  
    ngOnInit(): void {
      console.log("ssdf");
      this.infosMovie$ = this.http.get<string>('http://87.106.196.204:5000/roles_movies?id=121').pipe(
        map(v => {
          console.log('fds');
          console.log(v);
          return v;
        }));
    }
}
