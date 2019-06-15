import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightOffersComponent } from './flight-offers/flight-offers.component';

const routes: Routes = [
{
  path: 'flights',
  component: FlightOffersComponent,
  data: { title: 'List of Flights'}
},
{
  path: '',
  redirectTo: '/flights',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
