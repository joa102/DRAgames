import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game';
import { ApiIgdbService } from '../api-igdb.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  games?: Game[];
  savedGames: Game[] | undefined;
  ids?: Number[];

  constructor(
    private route: ActivatedRoute,
    private apiIgdbService: ApiIgdbService,
    private backend: BackendService,
    ) { }

  ngOnInit(): void {
    this.getSavedGames();
  }

  // backend
  getSavedGames() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.backend.getSavedGames().subscribe(data => {
      this.savedGames = data;
      this.getIds(data);
    });
  }

  // api
  getGames(ids: Number[]) {
    this.apiIgdbService.getGamesFavourites(ids).subscribe(data => {
      this.games = data;
    });
  }

  getIds(savedGames: Game[]) {

    this.ids = [];

    for(const game of savedGames) {
      this.ids.push(game.id);
    }
    this.getGames(this.ids);
  }

}
