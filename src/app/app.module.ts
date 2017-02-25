import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { MapboxMapComponent } from './components/mapbox-map/mapbox-map.component';
import { MapService } from './services/map/map.service';
import { MapConfigService } from './services/map/map-config.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboxMapComponent,
    MapboxMapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MapService,
    MapConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
