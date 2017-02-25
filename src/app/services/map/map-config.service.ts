import { Injectable } from '@angular/core';
@Injectable()
export class MapConfigService {
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 0;
  // style: string = "mapbox://styles/mapbox/light-v9";
  constructor() { }

  setStyle(style: string) {
    sessionStorage.setItem("mapStyle", style)
  }

  getStyle() {
    if (!sessionStorage.getItem("mapStyle"))
      return "mapbox://styles/mapbox/light-v9";
    return sessionStorage.getItem("mapStyle");
  }

  setZoom(zoom: number) {
    sessionStorage.setItem("mapZoom", String(zoom))
  }
  
  getZoom() {
    if (!sessionStorage.getItem("mapZoom"))
      return 0;
    return Number(sessionStorage.getItem("mapZoom"));
  }

  setLat(lat: number) {
    sessionStorage.setItem("mapLat", String(lat))
  }

  getLat() {
    if (!sessionStorage.getItem("mapLat"))
      return 0;
    return Number(sessionStorage.getItem("mapLat"));
  }

  setLng(lng: number) {
    sessionStorage.setItem("mapLng", String(lng))
  }

  getLng() {
    if (!sessionStorage.getItem("mapLng"))
      return 0;
    return Number(sessionStorage.getItem("mapLng"));
  }

}