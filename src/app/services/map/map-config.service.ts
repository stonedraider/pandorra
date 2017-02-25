import { Injectable } from '@angular/core';
@Injectable()
export class MapConfigService {
    latitude: number = 0;
    longitude: number = 0;
    zoom: number = 0;
    style: string = "mapbox://styles/mapbox/light-v9";
  constructor() { }
}