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

  getPopulares() {
    let POPULARES_PETICION: string = this.URL_API +
      "/discover/movie?sort_by=popularity.desc" +
      this.KEY_API +
      this.LANG_ES +
      this.CALLBACK_API;

    return this._jsonp.get(POPULARES_PETICION).map(data => data.json());
  }

}
