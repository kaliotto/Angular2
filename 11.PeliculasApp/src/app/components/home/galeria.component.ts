import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('seccion') seccion;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  abrirPelicula(id: string) {
    this._router.navigate(['detalle', id]);
  }

}
