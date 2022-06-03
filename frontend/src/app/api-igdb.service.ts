import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiIgdbService {

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

  constructor(private http: HttpClient) { }

  /** GET games from the API */
  getGames(): Observable<any> {
    return this.http.post(
      `${this.igdbUrl}games`, 'fields name, rating, summary, storyline, cover.url, cover.image_id, platforms.name; search "Halo";',
      this.httpOptions
    );
  }

  /** GET games favourites from the API */
  getGamesFavourites(ids: Number[]): Observable<any> {
    return this.http.post(
      `${this.igdbUrl}games`, 'fields name, rating, summary, storyline, cover.url, cover.image_id, platforms.name; where id = (' + ids + ');',
      this.httpOptions
    );
  }

  /** GET game by id. Will 404 if id not found */
  getGame(id: number): Observable<any> {
    return this.http.post(
      `${this.igdbUrl}games`, 'fields name, rating, summary, storyline, cover.url, cover.image_id, platforms.name; where id = ' + id + ';',
      this.httpOptions
    );
  }

  /* GET games whose name contains search term */
  searchGames(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty game array.
      return of([]);
    }
    return this.http.post(
      `${this.igdbUrl}games`, 'fields name, rating, summary, storyline, cover.url, cover.image_id, platforms.name; search "' + term + '";',
      this.httpOptions
    );
  }
}
