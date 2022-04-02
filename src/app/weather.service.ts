import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icurrentweatherdata } from './icurrentweatherdata';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getCurrentWeather(city: string, country: string){
    this.httpClient.get<Icurrentweatherdata>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
    )
  }
}
