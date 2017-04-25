import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  cartelera: Pelicula[];
  populares: Pelicula[];
  populares_ninos: Pelicula[];

  constructor(public _peliculasService: PeliculasService) {
    this._peliculasService.getCartelera().subscribe(data => {
      this.cartelera = this.mapearPeliculas(data);
    });

    this._peliculasService.getPopulares().subscribe(data => {
      this.populares = this.mapearPeliculas(data);
    });

    this._peliculasService.getPopularesNinos().subscribe(data => {
      this.populares_ninos = this.mapearPeliculas(data);
    });
  }

  private mapearPeliculas(data: any[]): Pelicula[] {
    let coleccion: Pelicula[] = [];
    for (let i = 0; i < data.length; i++) {
      let pelicula: Pelicula = new Pelicula();
      pelicula.id = data[i].id;
      pelicula.titulo = data[i].title;
      pelicula.img = this._peliculasService.ObtenerURLBack_Poster(data[i]);
      coleccion.push(pelicula);
    }
    return coleccion;
  }

  ngOnInit() { }

}

class Pelicula {
  id: string;
  titulo: string;
  img: any;
}
