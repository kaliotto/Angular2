import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../app/clases/lista';

@Pipe({
    name: 'completas',
    pure: false
})
export class CompletasPipe implements PipeTransform {
    transform(listas: Lista[], esCompletada: boolean): Lista[] {
        let filtradas: Lista[] = [];

        for (let i = 0; i < listas.length; i++) {
            if (listas[i].esListaCompletada == esCompletada) {
                filtradas.push(listas[i]);
            }
        }

        return filtradas;
    }
}
