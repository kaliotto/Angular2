import { Component, OnInit, OnChanges } from '@angular/core';
import {Canal} from '../../classes/canal';
import {YoutubeService} from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnChanges {

  canales: string[];

  constructor(private _YTServ: YoutubeService) { }

  ngOnInit() {
    this.cargarCanales();
  }

  cargarCanales() {
    if (localStorage.getItem('canales')) {
      this.canales = JSON.parse(localStorage.getItem('canales'));
    } else {
      this.canales = [];
    }
  }

  cerrarVideo(video: any) {
    this._YTServ.desSeleccionarVideo();
    $('#modalVideo').modal('hide');
  }

  ngOnChanges() {
    //this.cargarCanales();
  }


}
