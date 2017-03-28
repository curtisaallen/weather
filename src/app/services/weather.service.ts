import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  apiKey: String;
  conditionsUrl: String;
  searchUrl: String;

  constructor(public http: Http) {
    this.apiKey = 'e84a89c8be50b75a';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/';
    this.searchUrl = 'http://localhost:8101/search/aq?query=';
  }

  getWeather(city, state) {
     return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
     .map(res => res.json());
  }
  searchCities(searchStr) {
    return this.http.get(this.searchUrl+searchStr)
    .map(res => res.json());
  }

  changeWeather(zmw) {
     return this.http.get(this.conditionsUrl+'/zmw:'+zmw+'.json')
     .map(res => res.json());
  }

}
