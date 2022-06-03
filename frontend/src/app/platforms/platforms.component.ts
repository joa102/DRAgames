import { Component, OnInit } from '@angular/core';

import { TopConsoles } from '../topConsoles';
import { ScrapingService } from '../scraping.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  topConsoles?: TopConsoles[];

  constructor(
    private scraping: ScrapingService
  ) { }

  ngOnInit(): void {
    this.getTopPokemons();
  }

  getTopPokemons(): void {
    this.scraping.getTopConsoles().subscribe((data) => {
      this.topConsoles = data;
    });
  }

}
