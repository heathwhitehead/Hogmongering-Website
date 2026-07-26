import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Releases } from './releases/releases';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'releases', component: Releases }
];
