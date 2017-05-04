import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  nuevoCanal: string;
  constructor(private _YTServ: YoutubeService) { }

  ngOnInit() {
  }

  anadirCanal() {
    let canales;
    let canales_str: string = localStorage.getItem('canales');
    if (canales_str) {
      if (canales_str.indexOf(this.nuevoCanal) > -1) {
        alert("Ya existe ese canal.");
        return;
      }
      canales = JSON.parse(canales_str);
    } else {
      canales = [];
    }

    canales.push(this.nuevoCanal);
    this._YTServ.guardarCanales(canales);
  }
}
