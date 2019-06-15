import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { AuthModel, FlightOffers } from '../models/index';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FlightOffersService } from '../services/flight-offers.service';

@Component({
  selector: 'app-flight-offers',
  templateUrl: './flight-offers.component.html',
  styleUrls: ['./flight-offers.component.scss']
})
export class FlightOffersComponent implements OnInit {
  public authToken: AuthModel;
  private authTokenSubsc$: Subscription;
  private flightOffersSubsc$: Subscription;
  public searchObj = {
    origin: 'MIA',
    destination: 'PAR',
    depatureDate: '2019-08-01',
    returnDate:  '2019-08-28'
  };
  public flightOffers: FlightOffers;
  public isCollapsed = false;
  public flightList: any;

  constructor(private tokenService: TokenService,
              private fightOffersService: FlightOffersService
    ) { }

  ngOnInit() {
    this.authTokenSubsc$ = this.tokenService.getToken()
    .subscribe(
      data => {
       // console.log("Did we get data: ", data)
        this.authToken = data;
      },
      error => {
        console.log('We got an error: ', error);
      },
      () => {
        console.log('WE completed time to make an API call: ', this.authToken);
        if(this.authToken){
          this.getFlightOffers(this.authToken);
          this.authTokenSubsc$.unsubscribe();
        }
      }
    );
 }

 getFlightOffers(token){
 console.log('Calling Flight Offers');
 if (token) {
  this.flightOffersSubsc$ = this.fightOffersService.getFlightOffers(token, this.searchObj)
  .subscribe(
    data => {
        this.flightOffers = data;
    },
    error => {
      console.log("We got an Error: ", error)
    },
    () => {
      console.log('We got Flights: ', this.flightOffers);
      this.flightList = this.flightOffers;
    console.log("do we have flightList: ", this.flightList.data[0].offerItems[0].price.total)
    }
  )
 }
 }
  // setInterval(()=> {
  //   if(this.authToken)
  // }, 2000);


}
