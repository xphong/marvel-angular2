import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'about', component: AboutComponent }
];
