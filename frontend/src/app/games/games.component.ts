import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  // games: Game[] = [];
  games?: Game[];
  gamesO!: Observable<Game[]>;
  // @Input() games?: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
    // console.log(this.games);
  }

  // getGames(): void {
  //   this.gameService.getGames()
  //       .subscribe(games => this.games = games);
  // }

  getGames() {
    this.gameService.getGames().subscribe(data => {
      // data.rating = Math.round(data.rating);
      this.games = data;
      this.gamesO = data;
      console.log(this.games);
      // console.log(this.gamesO);
    });
  }

  // emptyGames() {
  //   this.games = [];
  // }
}
