import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';


@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  city: String;
  state: String;
  weather: any;
  searchStr:String;
  results:any;
  zmw:String;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    this.zmw = '10001.11.99999';
  }

  ngOnInit() {
    if(localStorage.getItem('location')  === null){
      this.weatherService.changeWeather(this.zmw).subscribe(weather => {
         this.weather = weather.current_observation;
      });
    } else {
    this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
    this.weatherService.changeWeather(this.zmw).subscribe(weather => {
       this.weather = weather.current_observation;
    });
    }
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
    .subscribe(res => {
       this.results = res.RESULTS;
    });
  }

  chooseCity(value) {
     this.results = [];
     console.log(value);
     this.weatherService.changeWeather(value.zmw).subscribe(weather => {
        console.log(weather);
        this.weather = weather.current_observation;
     });
  }

}
