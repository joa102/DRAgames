import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from '../game';
import { ApiIgdbService } from '../api-igdb.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games?: Game[];

  constructor(private apiIgdbService: ApiIgdbService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.apiIgdbService.getGames().subscribe(data => {
      this.games = data;
    });
  }
}
