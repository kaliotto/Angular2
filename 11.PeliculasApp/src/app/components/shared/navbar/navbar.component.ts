import { Component, OnInit } from '@angular/core';
// import {PeliculasService} from '../../../services/peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  termino: string = "";

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarPeliculas() {
    this._router.navigate(['buscar', this.termino]);
  }
}
