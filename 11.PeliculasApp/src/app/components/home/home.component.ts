import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  // populares: Pelicula[] = [];
  populares: any[] = [];

  constructor(public _peliculasService: PeliculasService) {
    this._peliculasService.getPopulares().subscribe(data => {
      console.log("Data: " + data);
      // this.populares = data.results;
      for (let i = 0; i < 6; i++) {
        let tamano: string = "";
        let pelicula: Pelicula = new Pelicula();
        pelicula.id = data.results[i].id;
        pelicula.titulo = data.results[i].title;
        if (i == 0 || i == 5) {
          tamano = "w500/";
        } else {
          tamano = "w300/";
        }
        pelicula.img = "https://image.tmdb.org/t/p/" + tamano + data.results[i].backdrop_path;
        this.populares.push(pelicula);
        console.log(JSON.stringify(data.results[i]));
      }
      this.loading = false;
    });
  }

  ngOnInit() { }

}

export class Pelicula {
  id: string;
  titulo: string;
  img: string;
}
