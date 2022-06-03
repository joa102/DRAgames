import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PlatformsComponent } from './platforms/platforms.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'detail/:id', component: GameDetailComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'platforms', component: PlatformsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
