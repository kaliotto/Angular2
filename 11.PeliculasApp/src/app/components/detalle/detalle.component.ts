import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {
  pelicula: Pelicula;
  id: string;
  volverA: string;
  termino: string = "";

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _peliculasService: PeliculasService) {
    this._activatedRoute.params.subscribe(parametros => {
      this.id = parametros.id;
      this.volverA = parametros.pag;
      if (parametros.termino) {
        this.termino = parametros.termino;
      }
      this._peliculasService.getPelicula(this.id)
        .subscribe(data => this.pelicula = this.mapearPelicula(data));
    });
  }

  ngOnInit() {
  }

  mapearPelicula(data: any): Pelicula {
    let pelicula: Pelicula = new Pelicula();
    pelicula.titulo = data.title;
    pelicula.sinopsis = data.overview;
    pelicula.frase = data.tagline;
    pelicula.img = this._peliculasService.ObtenerURLPoster_Back(data);
    pelicula.popularidad = data.popularity;
    pelicula.voto_avg = data.vote_average;
    return pelicula;
  }

  volver() {
    this._router.navigate([this.volverA, this.termino]);
  }
}


class Pelicula {
  titulo: string;
  sinopsis: string;
  frase: string;
  img: string;
  popularidad: number;
  voto_avg: number;
}
