import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
