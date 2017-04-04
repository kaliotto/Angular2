import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
    artistas: any[] = [];
    artista: any = {};
    urlSpotify: string = "https://api.spotify.com/v1/";

    constructor(private _http: Http) {

    }

    getArtistas(termino: string) {
        let query = `search?q=${termino}&type=artist`;
        let url = this.urlSpotify + query;

        return this._http.get(url)
            .map(res => {
                this.artistas = res.json().artists.items;
                console.log(this.artistas);
            })
    }

    getArtista(artistaId: string) {
        let query = `artists/${artistaId}`;
        let url = this.urlSpotify + query;

        return this._http.get(url)
            .map(res => {
                console.log(res.json());
                return this.artista = res.json();
            })
    }

    getTop(artistaId: string) {
        let query = `artists/${artistaId}/top-tracks?country=ES`;
        let url = this.urlSpotify + query;

        return this._http.get(url)
            .map(res => {
                console.log(res.json().tracks);
                return this.artista = res.json().tracks;
            })
    }

}
