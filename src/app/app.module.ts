import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersService } from './shared/services/characters/characters.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { AboutComponent } from './about/about.component';
import { SpinnerComponent } from './components/ui/spinner/spinner.component';
import { NavComponent } from './components/ui/nav/nav.component';
import { PowerlevelsComponent } from './powerlevels/powerlevels.component';
import { PowerlevelsService } from './shared/services/powerlevels/powerlevels.service';
import { PowerlevelsTableComponent } from './components/powerlevels-table/powerlevels-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterCardComponent,
    AboutComponent,
    SpinnerComponent,
    NavComponent,
    PowerlevelsComponent,
    PowerlevelsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    CharactersService,
    PowerlevelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
