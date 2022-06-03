import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // private gamesUrl = 'https://dokipok.herokuapp.com/api/games';  // URL to web api - Despliegue en Heroku
  // private gamesUrl = 'http://localhost:8080/api/games';  // URL to web api - Local
  private gamesUrl = 'http://localhost:8081/api/games';  // URL to web api - Docker
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _refresh$ = new Subject<void>();

  constructor( private http: HttpClient ) { }

  get refresh$(){
    return this._refresh$;
  }

  /** GET saved games from the server */
  getSavedGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

   /** GET saved game from the server */
  getSavedGame(id: Number): Observable<Game> {
    return this.http.get<Game>(this.gamesUrl + "/" + id, this.httpOptions);
  }

  //////// Save methods //////////

  /** POST: add a new game to the server */
  save(game: Game): Observable<Game>  {
    return this.http.post<Game>(this.gamesUrl, game, this.httpOptions).pipe(
      tap( () => {
        this._refresh$.next();
      })
    )
  }

  /** DELETE: delete the game from the server */
  remove(game: Game): Observable<Game> {
    return this.http.delete<Game>(this.gamesUrl + "/" + game.id, this.httpOptions);
  }
}
