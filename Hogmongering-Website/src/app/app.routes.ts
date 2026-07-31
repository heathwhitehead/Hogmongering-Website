import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Releases } from './releases/releases';
import { Setlists } from './setlists/setlists';
import { PhotoService } from './photo-service/photo-service';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'releases', component: Releases },
  { path: 'photo-service', component: PhotoService },
  { path: 'setlists', component: Setlists}
];
