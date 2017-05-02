import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paginaAlvarito: any = {
    nextPageToken: "",
    videos: []
  };
  // videoSel: any;

  constructor(private _YTServ: YoutubeService) {
    // this.getVideos(null);
  }

  ngOnInit() { }

  // getVideos(nextPageToken: string) {
  //   if (nextPageToken) {
  //     this._YTServ.getVideosAlvarito(nextPageToken).subscribe(paginaAlvarito => {
  //       console.log(paginaAlvarito);
  //       this.paginaAlvarito.nextPageToken = paginaAlvarito.nextPageToken;
  //       this.paginaAlvarito.videos.push.apply(this.paginaAlvarito.videos, paginaAlvarito.videos);
  //     });
  //   } else {
  //     this._YTServ.getVideosAlvarito().subscribe(paginaAlvarito => {
  //       console.log(paginaAlvarito);
  //       this.paginaAlvarito = paginaAlvarito;
  //     });
  //   }
  // }

  // verVideo(video: any) {
  //   this.videoSel = video;
  //   $('#modalVideo').modal();
  // }

  cerrarVideo(video: any) {
    this._YTServ.desSeleccionarVideo();
    $('#modalVideo').modal('hide');
  }

}
