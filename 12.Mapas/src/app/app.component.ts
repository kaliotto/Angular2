import { Component } from '@angular/core';
import {MapasService} from './services/mapas.service';
import {Marcador} from './interfaces/marcador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 43.267225;
  lng: number = -2.920313;
  zoom: number = 16;

  marcadorSel: any;

  constructor(private _mapasService: MapasService) {
    this._mapasService.cargarMarcadores();
  }

  clickMapa(evento: any) {
    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "Sin título",
      draggable: true
    }

    this._mapasService.insertarMarcador(nuevoMarcador);
  }

  clickMarcador(marcador: Marcador) {
    this.marcadorSel = marcador;
  }

  dragEndMarcador(marcador: Marcador, evento: any) {
    let nuevaLat = evento.coords.lat;
    let nuevaLng = evento.coords.lng;

    marcador.lat = nuevaLat;
    marcador.lng = nuevaLng;

    this._mapasService.guardarMarcadores();
  }

  borrarMarcador(idx: number) {
    this._mapasService.borrarMarcador(idx);
    this.marcadorSel = null;
  }
}
