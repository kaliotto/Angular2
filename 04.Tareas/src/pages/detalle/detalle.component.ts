import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { TareasService } from '../../app/services/tareas.service';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
    idx: number;
    lista: Lista;
    constructor(public _navCtrll: NavController,
        public _navParams: NavParams,
        public _tareasService: TareasService,
        public _alertController: AlertController) {
        this.idx = this._navParams.get('idx');
        this.lista = this._navParams.get('lista');
    }

    ngOnInit() { }

    actualizar(item: ListaItem) {
        item.esListaItemCompletado = !item.esListaItemCompletado;
        let todosMarcados = true;
        for (let i = 0; i < this.lista.items.length; i++) {
            if (!this.lista.items[i].esListaItemCompletado) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.esListaCompletada = todosMarcados;
        
        this._tareasService.actualizarData();
    }

    borrarLista() {
        let confirm = this._alertController.create({
            title: '¿Estás seguro?',
            message: `¿Realmente quieres eliminar la lista "${this.lista.nombre}"?`,
            buttons: [
                'No',
                {
                    text: 'Sí',
                    handler: () => {
                        this._tareasService.borrarLista(this.idx);
                        this._navCtrll.pop();
                    }
                }
            ]
        });

        confirm.present();
    }
}
