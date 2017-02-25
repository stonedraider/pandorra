import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl/dist/mapbox-gl.js';
import { MapService } from '../../services/map/map.service';
import { MapConfigService } from '../../services/map/map-config.service';
@Component({
  selector: 'app-mapbox-map',
  templateUrl: './mapbox-map.component.html',
  styleUrls: ['./mapbox-map.component.less']
})
export class MapboxMapComponent implements OnInit {
  constructor(
    private mapService: MapService,
    private mapconfig: MapConfigService
    ) { }
  ngOnInit() {
       let map = new Map({
      container: 'divMapboxMap',
      style: this.mapconfig.style,
      zoom: this.mapconfig.zoom,
      center: [this.mapconfig.longitude,this.mapconfig.latitude]
    });
    this.mapService.map = map;
  }
}