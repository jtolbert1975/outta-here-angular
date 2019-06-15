import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import * as AppConst from '../app.const';
import { FlightOffers } from '../models/flight.model';



@Injectable({
  providedIn: 'root'
})
export class FlightOffersService {


  constructor(private httpC: HttpClient) {}


  public getFlightOffers(loginObj, searchObj): Observable<any> {
    console.log('LogObj: ',loginObj)
    const url = AppConst.settings.hostname + '//v1/shopping/flight-offers';
    const token = loginObj.token_type + ' ' + loginObj.access_token;
    const params = new HttpParams({
      fromObject: {
        origin: searchObj.origin,
       destination: searchObj.destination,
        depatureDate: searchObj.depatureDate,
        returnDate: searchObj.returnDate
      }
    });
    const options = {headers: new HttpHeaders(
      {'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: token
      }
    ),
    method: 'get',
    params: new HttpParams({
      fromObject: {
        origin: searchObj.origin,
       destination: searchObj.destination,
       departureDate: searchObj.depatureDate,
        returnDate: searchObj.returnDate
      }
    })
  };
  console.log("Da Options: ", options)
    return this.httpC.get(url, options)
    .pipe(
      tap(data => { console.log('We got flights: ', data); })
    );
  }

}
