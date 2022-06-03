import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

  // private topConsolesUrl = 'https://dokipok.herokuapp.com/api/topConsoles/data';  // URL to web api - Despliegue en Heroku
  // private topConsolesUrl = 'http://localhost:8080/api/topConsoles/data';  // URL to web api - Local
  private topConsolesUrl = 'http://localhost:8081/api/topConsoles/data';  // URL to web api - Docker
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTopConsoles(): Observable<any> {
    return this.http.get(this.topConsolesUrl);
  }
}
