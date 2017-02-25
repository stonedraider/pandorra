import { Component } from '@angular/core';

import { MapConfigService } from '../../services/map/map-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private mapconfig: MapConfigService
  ) { }

  ngOnInit() {
    this.mapconfig.setStyle("mapbox://styles/enegeok/ciylnmpr3006k2slaf7wclg1y");
    this.mapconfig.setLng(7.447467);
    this.mapconfig.setLat(46.948192);
    this.mapconfig.setZoom(14.5);
  }
}
