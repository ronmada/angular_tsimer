import { TestBed } from '@angular/core/testing';

import { PlaceService } from '../Services/place.service';

describe('PlaceService', () => {
  let service: PlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
