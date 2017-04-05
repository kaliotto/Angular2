import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';
import { ListaItem } from '../clases/lista_items';

@Injectable()
export class TareasService {
    listas: Lista[] = [];

    constructor() {
        let lista1 = new Lista("Lista de la compra");
        let lista2 = new Lista("Juegos que deseo");
        let lista3 = new Lista("Cosas de la universidad");

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        
        console.log("Servicio inicializado");
    }
}
