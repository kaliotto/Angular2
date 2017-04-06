import { Injectable } from '@angular/core';
import { Lista, ListaItem } from '../clases/index';

@Injectable()
export class TareasService {
  listas: Lista[] = [];

  constructor() {
    // let lista1 = new Lista("Lista de la compra");
    // let lista2 = new Lista("Juegos que deseo");
    // let lista3 = new Lista("Cosas de la universidad");
    //
    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);
    this.cargarData();

    console.log("Servicio inicializado");
  }

  actualizarData() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.actualizarData();
  }

  borrarLista(idx:number){
    this.listas.splice(idx, 1);
    this.actualizarData();
  }
}
