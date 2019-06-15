import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { createTokenServiceMock } from '../../test/mocks/index';

describe('TokenService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

 // httpTestingController = TestBed.get(HttpTestingController);
  it('should be created', () => {
    const service: TokenService = TestBed.get(TokenService);
    expect(service).toBeTruthy();
  });
  describe('getToken', () => {
    const service: TokenService = TestBed.get(TokenService);
    service.getToken().subscribe(data => {
      expect(data.uername).toBe('imanjesolutions@gmail.com');
      expect(data.application_name).toBe('Outta Here');
      expect(data.state).toBe('approved');
      expect(data.client_id).toBe('wdaqHKyDxaRBl1YVxhbyb4VOGzP2ftMG');
      expect(data.access_token).toBeTruthy();
    });
  });
});
