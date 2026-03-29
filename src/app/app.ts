import { Component, OnInit, signal } from '@angular/core';
import { FirstPage } from './pages/first-page/first-page';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cinema_app');
}
