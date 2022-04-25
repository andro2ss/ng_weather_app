import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {WeatherData} from "../models/weather.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) {
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://community-open-weather-map.p.rapidapi.com/weather', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Host', 'community-open-weather-map.p.rapidapi.com')
        .set('X-RapidAPI-Key', '70e3b08d79msh70bcf954fc047e6p172134jsn31f2b2d7a917'),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    })
  }
}
