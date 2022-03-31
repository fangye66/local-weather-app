import { Component, OnInit } from '@angular/core';
import { Icurrentweather } from '../icurrentweather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: Icurrentweather
  constructor() { 
    this.current = {
      city: 'Redmond',
      country: 'US',
      date: new Date(),
      image:'',
      temperature: 59,
      description: 'Rainy'
    }

  }

  ngOnInit(): void {
  }

}
