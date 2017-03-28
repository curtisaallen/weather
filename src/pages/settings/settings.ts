import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  searchStr:String;
  results:any;
  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }
  getQuery() {
    this.weatherService.searchCities(this.searchStr)
    .subscribe(res => {
       this.results = res.RESULTS;
    });
  }

  chooseCity(value) {
     this.results = [];
     localStorage.setItem('location', JSON.stringify(value));
     this.saveChanges();
  }

  saveChanges() {
    this.navCtrl.push(WeatherPage);
  }
}
