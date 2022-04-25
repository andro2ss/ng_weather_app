import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../../models/weather.model";

@Component({
  selector: 'app-bottom-info-box',
  templateUrl: './bottom-info-box.component.html',
  styleUrls: ['./bottom-info-box.component.scss']
})
export class BottomInfoBoxComponent implements OnInit {

  constructor() {
  }

  @Input('weatherData') weatherData?: WeatherData;

  ngOnInit(): void {
  }

}
