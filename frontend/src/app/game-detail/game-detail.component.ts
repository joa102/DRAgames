import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

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

  // @Input() game?: Game;
  game: Game | undefined;
  // game?: Game;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 4, rows: 1, color: '#000000'},
  ];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGame();
    // console.log(this.game);
  }

  // getGame(): void {
  //   // const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   console.log(id);
  //   this.gameService.getGame(id)
  //     .subscribe(game => this.game = game);
  //   // this.gameService.getGame(id).subscribe(data => {
  //   //   data.rating = Math.round(data.rating);
  //   //   this.game = data;
  //   //   console.log(data);
  //   // });
  // }

  getGame() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGame(id).subscribe(data => {
      this.game = data[0];
      console.log(data);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
