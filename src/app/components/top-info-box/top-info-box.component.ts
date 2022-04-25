import {Component, OnInit, Input} from '@angular/core';
import {WeatherData} from "../../models/weather.model";

@Component({
  selector: 'app-top-info-box',
  templateUrl: './top-info-box.component.html',
  styleUrls: ['./top-info-box.component.scss']
})
export class TopInfoBoxComponent implements OnInit {

  constructor() {
  }

  @Input('weatherData') weatherData?: WeatherData;

  ngOnInit(): void {
  }

}
