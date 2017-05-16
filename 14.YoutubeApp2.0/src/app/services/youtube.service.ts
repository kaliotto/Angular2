import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
// import {Canal} from '../classes/canal';

@Injectable()
export class YoutubeService {

  private YOUTUBE_URL: string = "https://www.googleapis.com/youtube/v3";
  private APIKEY: string = "AIzaSyBL3za_0gEsZML61dYSxuzcUrXXLRgQbzU";
  private PL: string = "/playlistItems";
  private CHNL: string = "/channels";
  private paramsPL: URLSearchParams;

  constructor(private _http: Http) { }



  obtenerIdUpload(idCanal: string) {
    this.prepararParametrosBusqCanal(idCanal);
    return this._http.get(this.YOUTUBE_URL + this.CHNL, { search: this.paramsPL })
      .map(res => {
        return res.json().items[0].contentDetails.relatedPlaylists.uploads;
      });
  }

  obtenerDatosPlaylist(idUpload: string, nextPageToken?: string) {

    this.prepararParametrosBusqPlaylist(idUpload, nextPageToken);

    return this._http.get(this.YOUTUBE_URL + this.PL, { search: this.paramsPL })
      .map(res => {
        return res.json();
      });

  }

  prepararParametrosBusqCanal(idCanal) {
    this.paramsPL = new URLSearchParams();
    this.paramsPL.set('part', 'contentDetails');
    this.paramsPL.set('key', this.APIKEY);
    this.paramsPL.set('id', idCanal);
  }

  prepararParametrosBusqPlaylist(idUploads: string, nextPageToken?: string) {
    this.paramsPL = new URLSearchParams();
    this.paramsPL.set('key', this.APIKEY);
    this.paramsPL.set('part', 'snippet');
    this.paramsPL.set('playlistId', idUploads); //Uploads de Alvarito
    this.paramsPL.set('maxResults', '6');
    if (nextPageToken) {
      this.paramsPL.set('pageToken', nextPageToken);
    }
  }
}
