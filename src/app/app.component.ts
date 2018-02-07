import { Component } from '@angular/core';
import { TripsService } from './trips.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  trips = [];

  constructor(private tripsService: TripsService){ 
    this.tripsService.update().subscribe(data => this.trips = data);
  };

  toFloat(number) {
    return parseFloat(number);
  }
}
