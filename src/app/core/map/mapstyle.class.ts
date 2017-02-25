import {ILatLng} from './latLng.interface';
export class Mapstyle implements ILatLng {
    latitude: number;
    longitude: number;
    zoom: number;
    style: string;
    options: any;
}