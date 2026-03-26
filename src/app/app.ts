import { Component, signal } from '@angular/core';
import { FirstPage } from './first-page/first-page';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FirstPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cinema_app');
}
