import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { PowerlevelsComponent } from './powerlevels/powerlevels.component';


export const ROUTES: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'powerlevels', component: PowerlevelsComponent },
  { path: '**',    component: CharactersComponent }
];
