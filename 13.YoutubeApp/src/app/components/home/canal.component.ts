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
  @Input() channelId;
  playListId: string;
  canal: Canal;
  videoSel: any;

  constructor(private _YTServ: YoutubeService) { }

  ngOnInit() {
    this.canal = new Canal();

    this._YTServ.getUploadsIdFromChannel(this.channelId).subscribe(playListId => {
      this.playListId = playListId;
      this.getVideos(null);
    });
  }

  getVideos(nextPageToken: string) {
    // console.log("getVideos: " + this.playListId);
    if (nextPageToken) {
      this._YTServ.getVideos(this.playListId, nextPageToken).subscribe(canal => {
        this.canal.nextPageToken = canal.nextPageToken;
        this.canal.videos.push.apply(this.canal.videos, canal.videos);
      });
    } else {
      this._YTServ.getVideos(this.playListId).subscribe(canal => {
        this.canal = canal;
      });
    }
  }

  verVideo(video: any) {
    this._YTServ.seleccionarVideo(video);
    $('#modalVideo').modal();
  }
}
