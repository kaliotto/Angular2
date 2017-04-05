import { ListaItem } from './lista_item';

export class Lista {
    nombre: string;
    esListaCompletada: boolean;
    items: ListaItem[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.esListaCompletada = false;
    }
}
