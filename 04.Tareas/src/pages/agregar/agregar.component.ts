import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { TareasService } from '../../app/services/tareas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string = "";
  nombreItem: string = "";
  items: ListaItem[] = [];

  constructor(
    public _alertController: AlertController,
    public _navController: NavController,
    public _tareasService: TareasService
  ) { }

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

  guardarLista() {
    if (this.nombreLista.length == 0) {
      let alert = this._alertController.create({
        title: 'Nombre de la Lista',
        subTitle: '¡El nombre de la lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    let lista: Lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this._tareasService.agregarLista(lista);
    this._navController.pop();
  }
}
