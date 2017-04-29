import { Injectable } from '@angular/core';
import {Marcador} from '../interfaces/marcador';

@Injectable()
export class MapasService {
  marcadores: Marcador[] = [];
  constructor() {

  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }

  borrarMarcador(idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
