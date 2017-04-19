import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Heroe} from '../interfaces/heroe.interface';

@Injectable()
export class HeroesService {

  bdURL = "https://heroesapp-f2952.firebaseio.com/heroes";
  jsonExt = ".json";

  constructor(private _http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.bdURL + this.jsonExt, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let heroeURL = this.bdURL + '/' + key$ + this.jsonExt;
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put(heroeURL, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getHeroe(key$: string) {
    let heroeURL = this.bdURL + '/' + key$ + this.jsonExt;
    return this._http.get(heroeURL)
      .map(res => res.json());
  }

  getHeroes() {
    return this._http.get(this.bdURL + this.jsonExt)
      .map(res => res.json());
  }

  borrarHeroe(key$: string) {
    let heroeURL = this.bdURL + '/' + key$ + this.jsonExt;
    return this._http.delete(heroeURL)
      .map(res => res.json());
  }
}
