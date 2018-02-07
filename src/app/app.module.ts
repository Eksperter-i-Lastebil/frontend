import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { TripsService } from './trips.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCI_x52g169wIOv7HbXB-fb6fVObUCcr08'
    })
  ],
  providers: [TripsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
