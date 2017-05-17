import { Component, OnInit } from '@angular/core';
import {Canal, Video} from '../../classes/canal';

import {YoutubeService} from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  idCanales: string[];
  idUploads: any[];
  playlists: Canal[];
  videoSel: Video;

  constructor(private _yts: YoutubeService) {
    this.idCanales = this.obtenerIdsCanalesLocalStorage();
    this.obtenerIdsUploadCanales(this.idCanales);
    setTimeout(() => { this.obtenerPlaylists(this.idUploads) }, 300);
    // this.obtenerPlaylists(this.idUploads);
    // console.log(this.idUploads);
  }

  obtenerIdsCanalesLocalStorage(): string[] {
    if (localStorage.getItem('canales')) {
      return JSON.parse(localStorage.getItem('canales'));
    } else {
      return [];
    }
  }

  obtenerIdsUploadCanales(idCanales: string[]) {
    this.idUploads = [];
    for (let idCanal of idCanales) {
      this._yts.obtenerIdUpload(idCanal).subscribe(idUpload => {
        this.idUploads.push(idUpload);
      });
    }
  }

  obtenerPlaylists(idUploads: string[], nextPageToken?: string) {
    this.playlists = [];
    for (let idUpload of idUploads) {
      this._yts.obtenerDatosPlaylist(idUpload, nextPageToken).subscribe(playList => {
        let canal = this.mapearCanal(playList, nextPageToken);
        this.playlists.push(canal);
      });
    }
  }

  verVideo(video: any) {
    this.videoSel = video;
    $('#modalVideo').modal();
  }

  cerrarVideo(video: any) {
    this.videoSel = null;
    $('#modalVideo').modal('hide');
  }


  private mapearCanal(playList: any): Canal {
    let canal = new Canal();
    canal.id = playList.items[0].snippet["channelId"];
    canal.nombre = playList.items[0].snippet["channelTitle"];
    canal.uploads.nextPageToken = playList.nextPageToken;
    canal.uploads.videos = this.mapearVideosCanal(playList.items);

    return canal;
  }

  private mapearVideosCanal(items: any[]): Video[] {
    let videos = [];
    for (let item of items) {
      let video = new Video();
      video.id = item.snippet.resourceId.videoId;
      video.titulo = item.snippet.title;
      video.descripcion = item.snippet.description;
      video.thumbnail = item.snippet.thumbnails.high.url;
      videos.push(video);
    }

    return videos;
  }

  ngOnInit() {
  }

}
