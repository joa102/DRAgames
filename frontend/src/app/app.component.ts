import { Component } from '@angular/core';

import { Observable} from 'rxjs';

import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DRAgames';
  games!: Observable<Game[]>;
}
