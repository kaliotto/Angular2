import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { NavController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminadas',
  templateUrl: 'terminadas.component.html',
})
export class TerminadasComponent implements OnInit {
  constructor(private _tareasService: TareasService,
    private _navCtrll: NavController) { }

  ngOnInit() { }

  verDetalle(lista:Lista, idx:number) {
    this._navCtrll.push(DetalleComponent, {lista, idx});
  }

  actualizar(lista:Lista, item: ListaItem) {
      item.esListaItemCompletado = !item.esListaItemCompletado;
      let todosMarcados = true;
      for (let i = 0; i < lista.items.length; i++) {
          if (!lista.items[i].esListaItemCompletado) {
              todosMarcados = false;
              break;
          }
      }
      lista.esListaCompletada = todosMarcados;
      this._tareasService.actualizarData();
  }
}
