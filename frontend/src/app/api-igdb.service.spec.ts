import { TestBed } from '@angular/core/testing';

import { ApiIgdbService } from './api-igdb.service';

describe('ApiIgdbService', () => {
  let service: ApiIgdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIgdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
