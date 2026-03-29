import { Routes } from '@angular/router';
import { FirstPage } from './pages/first-page/first-page';
import { MovieInfoPage } from './pages/movie-info-page/movie-info-page';
import { MoviesSeen } from './pages/movies-seen/movies-seen';

export const routes: Routes = [
    { path: '', component: FirstPage },
    { path: 'film/:url', component: MovieInfoPage },
    { path: 'seen', component: MoviesSeen }
];
