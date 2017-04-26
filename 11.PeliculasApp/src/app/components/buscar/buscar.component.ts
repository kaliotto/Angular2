import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  termino: string = "";
  peliculas: any[];

  constructor(private _peliculasService: PeliculasService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(parametros => {
      this.termino = parametros.termino;
      this.buscarPeliculas();
    });
  }

  ngOnInit() {
  }

  buscarPeliculas() {
    this._peliculasService.buscarPeliculas(this.termino)
      .subscribe(data => this.peliculas = this.mapearPeliculas(data));
  }

  abrirPelicula(id: string) {
    this._router.navigate(['detalle', id]);
  }

  private mapearPeliculas(data: any[]): Pelicula[] {
    let coleccion: Pelicula[] = [];
    for (let i = 0; i < data.length; i++) {
      let pelicula: Pelicula = new Pelicula();
      pelicula.id = data[i].id;
      pelicula.img = this._peliculasService.ObtenerURLPoster_Back(data[i]);
      pelicula.titulo = data[i].title;
      pelicula.sinopsis = data[i].overview;
      coleccion.push(pelicula);
    }
    return coleccion;
  }

}

class Pelicula {
  id: string;
  img: string;
  titulo: string;
  sinopsis: string;
}
