import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  URL_API: string = "https://api.themoviedb.org/3";
  KEY_API: string = "&api_key=098ded55e33d4aa7e4805ee4c809b5af";
  LANG_ES: string = "&language=es";
  CALLBACK_API: string = "&callback=JSONP_CALLBACK";

  constructor(private _jsonp: Jsonp) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    desde.setDate(desde.getDate() + 15);
    hasta.setDate(hasta.getDate() + 90);

    let desdeStr = this.ObtenerFechaStr(desde);
    let hastaStr = this.ObtenerFechaStr(hasta);

    const CARTELERA_PETICION: string = this.URL_API +
      "/discover/movie?primary_release_date.gte=" + desdeStr + "&primary_release_date.lte=" + hastaStr +
      this.KEY_API +
      this.LANG_ES +
      this.CALLBACK_API;

    return this._jsonp.get(CARTELERA_PETICION).map(data => {
      return data.json().results.splice(0, 6);
    });
  }

  private ObtenerFechaStr(fecha: Date): string {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
  }

  getPopulares() {
    const POPULARES_PETICION: string = this.URL_API +
      "/discover/movie?sort_by=popularity.desc" +
      this.KEY_API +
      this.LANG_ES +
      this.CALLBACK_API;

    return this._jsonp.get(POPULARES_PETICION).map(data => {
      return data.json().results.splice(0, 6);
    });
  }

  getPopularesNinos() {
    const POPULARES_NINOS_PETICION: string = this.URL_API +
      "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
      this.KEY_API +
      this.LANG_ES +
      this.CALLBACK_API;

    return this._jsonp.get(POPULARES_NINOS_PETICION).map(data => {
      return data.json().results.splice(0, 6);
    });
  }

  getPelicula(id: string) {
    const PELICULA_PETICION: string = this.URL_API +
      `/movie/${id}?` +
      this.KEY_API +
      this.LANG_ES +
      this.CALLBACK_API;

    return this._jsonp.get(PELICULA_PETICION).map(data => {
      return data.json();
    });
  }

  buscarPeliculas(termino: string) {
    const BUSCAR_PELICULAS_PETICION: string = this.URL_API +
      `/search/movie?&query=${termino}&page=1&include_adult=false` +
      this.KEY_API +
      this.LANG_ES +
      this.CALLBACK_API;

    return this._jsonp.get(BUSCAR_PELICULAS_PETICION).map(data => {
      return data.json().results;
    });
  }

  public ObtenerURLBack_Poster(pelicula): string {
    let url = "https://image.tmdb.org/t/p/w500";
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else {
      return "/assets/img/no-image.png";
    }
  }

  public ObtenerURLPoster_Back(pelicula): string {
    let url = "https://image.tmdb.org/t/p/w500";
    if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      return "/assets/img/no-image.png";
    }
  }
}
