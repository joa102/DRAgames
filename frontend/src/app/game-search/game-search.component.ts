import { Component, Input, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {

  @Input() games?: Game[];
  private searchTerms = new Subject<string>();

  constructor(private gameService: GameService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // switchMap((term: string) => this.gameService.searchGames(term)),
      switchMap((term: string) => {
        if (term.length == 0) {
          return this.gameService.getGames();
        }
        return this.gameService.searchGames(term);
      }),
    ).subscribe(games => {
      while (this.games && this.games.length > 0) {
        this.games.pop();
      }
      for (const game of games) {
        this.games?.push(game);
      }
    });
  }

}
