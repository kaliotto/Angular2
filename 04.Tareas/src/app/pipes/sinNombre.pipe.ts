import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinNombre'
})
export class SinNombre implements PipeTransform {
  transform(value: string, porDefecto: string): string {

    return (value ? value : porDefecto);
  }
}
