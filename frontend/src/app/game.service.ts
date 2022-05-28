import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './game';
import { GAMES } from './mock-games';
// import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class GameService {

  private igdbUrl = 'https://circumvent-cors.herokuapp.com/https://api.igdb.com/v4/';  // URL to web api
  private ClientID = "yqq57uijjt7epy3sqqwm40rv3lnn8k";
  private Authorization = 'Bearer c1dq4jlywemqfpuv5p89965aekaivd';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Client-ID': this.ClientID,
        'Authorization': this.Authorization
      }),
  };

  // constructor(
  //   private http: HttpClient,
  //   private messageService: MessageService) { }
  constructor(private http: HttpClient) { }

  /** GET games from the server */
  // getGames(): Observable<Game[]> {
  //   return this.http.get<Game[]>(this.igdbUrl)
  //     .pipe(
  //       // tap(_ => this.log('fetched games')),
  //       catchError(this.handleError<Game[]>('getGames', []))
  //     );
  // }

  /** GET games from the API */
  getGames(): Observable<any> {
    return this.http.post(
      `${this.igdbUrl}games`, 'fields name; rating; cover.url;',
      this.httpOptions
    );
  }

  /** GET game by id. Will 404 if id not found */
  getGame(id: number): Observable<Game> {
    const url = `${this.igdbUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      // tap(_ => this.log(`fetched game id=${id}`)),
      catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
