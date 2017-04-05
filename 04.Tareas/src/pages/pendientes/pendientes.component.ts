import { Component, OnInit } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { TareasService } from '../../app/services/tareas.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _tareasService: TareasService,
    private _navCtrll: NavController) { }

  ngOnInit() { }

  irAgregar() {
    this._navCtrll.push(AgregarComponent)
  }
}
