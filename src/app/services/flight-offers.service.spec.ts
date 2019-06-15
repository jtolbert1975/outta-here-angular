import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightOffersService } from './flight-offers.service';

describe('FlightOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightOffersService = TestBed.get(FlightOffersService);
    expect(service).toBeTruthy();
  });
});
