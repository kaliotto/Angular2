import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Canal} from '../classes/canal';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private YOUTUBE_URL: string = "https://www.googleapis.com/youtube/v3";
  private APIKEY: string = "AIzaSyBL3za_0gEsZML61dYSxuzcUrXXLRgQbzU";
  private PL: string = "/playlistItems";
  private CHNL: string = "/channels";
  private paramsPL: URLSearchParams;

  public videoSel: any;

  constructor(private _http: Http) {
    this.paramsPL = new URLSearchParams();
    this.paramsPL.set('key', this.APIKEY);
  }

  getUploadsIdFromChannel(id: string) {
    this.paramsPL.set('key', this.APIKEY);
    this.paramsPL.set('part', 'contentDetails');
    this.paramsPL.set('id', id);
    return this._http.get(this.YOUTUBE_URL + this.CHNL, { search: this.paramsPL })
      .map(res => {
        console.log("ID= " + this.paramsPL.get('id'));
        console.log(res.json());
        //console.log(res.json().items[0].contentDetails.relatedPlaylists.uploads);
        //console.log(res.json().items[0].contentDetails.relatedPlaylists.uploads);
        this.paramsPL = new URLSearchParams();
        return res.json().items[0].contentDetails.relatedPlaylists.uploads;
      });
  }

  getVideos(playListId: string, nextPageToken?: string) {
    this.paramsPL.set('key', this.APIKEY);
    this.paramsPL.set('part', 'snippet');
    this.paramsPL.set('playlistId', playListId); //Uploads de Alvarito
    this.paramsPL.set('maxResults', '6');
    if (nextPageToken) {
      this.paramsPL.set('pageToken', nextPageToken);
    }

    return this._http.get(this.YOUTUBE_URL + this.PL, { search: this.paramsPL })
      .map(res => {
        console.log(res.json());
        let canal = new Canal();
        canal.nombre = res.json().items[0].snippet.channelTitle;
        canal.nextPageToken = res.json().nextPageToken;
        canal.videos = [];
        for (let video of res.json().items) {
          let snippet = video.snippet;
          snippet.description = snippet.description.slice(0, snippet.description.indexOf('►'));
          // if (snippet.title.toLowerCase().indexOf("clash of clans") == -1) {
          //   // snippet.title = snippet.title.slice(0, snippet.title.indexOf('|'));
          //   canal.videos.push(snippet);
          // }
          canal.videos.push(snippet);
        }
        this.paramsPL = new URLSearchParams();
        console.log("canal: ");
        console.log(canal);
        return canal;
      });

  }

  seleccionarVideo(video: any) {
    this.videoSel = video;
  }

  desSeleccionarVideo() {
    this.videoSel = null;
  }

}
