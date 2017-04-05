import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem: string = "";
  items: ListaItem[] = [];

  constructor() { }

  ngOnInit() { }

  agregarItem() {
    if (this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";
  }

  borrarItem(idx: number) {
    if (this.items.length > 0) {
      this.items.splice(idx, 1);
    }
  }
}
