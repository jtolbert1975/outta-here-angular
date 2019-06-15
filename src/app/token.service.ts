import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { AuthModel } from './models/auth.model';
import * as AppConst from './app.const';
//import { AppConfig } from './services/app.config';
//const httpOptions = {

//};
const apiUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

//   private clientId = AppConfig.settings.clientId;
// private clientSecret = AppConfig.settings.clientSecret;
// private grantType = AppConfig.settings.grantType;
// private hostName = AppConfig.settings.hostname;
public logObjToken: AuthModel;
  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
  //  console.log('Did we get AppConfig: ', AppConst.settings);
    const params = new HttpParams({
      fromObject: {
        grant_type: AppConst.settings.grant_type,
        client_id: AppConst.settings.clientId,
        client_secret: AppConst.settings.clientSecret
      }
    });
    const sentBody = params;
    const url = AppConst.settings.hostname + '/v1/security/oauth2/token';
    const options = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    console.log('The url: ', url);
    console.log('the body: ', sentBody);
    console.log('Options: ', options);

    return this.http.post(url, sentBody, options)
    .pipe(
      catchError(err => of([])),
      tap(data => console.log('We got the data: ', data))
      )
  }

  private handleError<T>(operation = 'operation', result?: T): any  {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
