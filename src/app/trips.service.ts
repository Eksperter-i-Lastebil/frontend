import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TripsService {
  constructor(
    private http: HttpClient) { }

  trips = [];

  get() {
    return this.trips;
  }

  update() {
    return this.http.get("http://10.24.33.107:5000/api");
  }

}
