import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'dominioSeguro'
})
export class DominioSeguroPipe implements PipeTransform {

  constructor(private _domSan: DomSanitizer) { }

  transform(value: any): any {
    const VIDEO_URL: string = "https://www.youtube.com/embed/";

    return this._domSan.bypassSecurityTrustResourceUrl(VIDEO_URL + value);
  }

}
