import { Component, Input, OnInit } from '@angular/core';
import {Canal} from '../../classes/canal';
import {YoutubeService} from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styles: []
})
export class CanalComponent implements OnInit {
  @Input() playListId;
  canal: Canal;
  videoSel: any;

  constructor(private _YTServ: YoutubeService) {
    //this.canal.videos = [];

    this.canal = new Canal();

  }
  ngOnInit() {
    this.getVideos(null);
  }
  getVideos(nextPageToken: string) {
    // console.log("Hola:" + this.playListId);
    // console.log("Hola:");
    if (nextPageToken) {
      this._YTServ.getVideos(this.playListId, nextPageToken).subscribe(canal => {
        // console.log(canal);
        this.canal.nextPageToken = canal.nextPageToken;
        this.canal.videos.push.apply(this.canal.videos, canal.videos);
      });
    } else {
      this._YTServ.getVideos(this.playListId).subscribe(canal => {
        // console.log(canal);
        this.canal = canal;
      });
    }
  }

  verVideo(video: any) {
    this._YTServ.seleccionarVideo(video);
    $('#modalVideo').modal();
  }
}
