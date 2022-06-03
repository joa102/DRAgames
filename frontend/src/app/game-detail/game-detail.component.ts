import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game';
import { ApiIgdbService } from '../api-igdb.service';
import { BackendService } from '../backend.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: Game | undefined;
  savedGame: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiIgdbService: ApiIgdbService,
    private backend: BackendService
  ) { }

  ngOnInit(): void {
    this.getGame();
    this.getSavedGame();
  }

  getGame() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiIgdbService.getGame(id).subscribe(data => {
      this.game = data[0];
    });
  }

  getSavedGame() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.backend.getSavedGame(id).subscribe(data => {
      this.savedGame = data;
      console.log(data);
    });
  }

  save(): void {
    if (this.game) {
      this.backend.save(this.game).subscribe();
    }
    this.getSavedGame();
  }

  remove(): void {
    if (this.game) {
      this.backend.remove(this.game).subscribe();
    }
    this.getSavedGame();
  }

  favourite(): void {
    if (!this.savedGame) {
      this.save();
      this.getSavedGame();
      alert("Favourite saved");
    } else {
      this.remove();
      this.savedGame = undefined;
      alert("Favourite removed");
    }
  }
}
