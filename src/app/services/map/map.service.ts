import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Map } from 'mapbox-gl/dist/mapbox-gl.js';
@Injectable()
export class MapService {
  map: Map<any, any>;
  constructor() { 
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZW5lZ2VvayIsImEiOiJjaXlrM3R4anMwMDA4MndsamhjOWRuMWl5In0.zkD94bb3muw0A5I_f3kw5w';
  }
}