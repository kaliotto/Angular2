import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {
  mostrar: boolean = true;

  texto: string = "Un gran poder conlleva una gran responsabilidad.";
  autor: string = "Tío Ben";

  personajes: string[] = ["Peter Parker", "Venom", "Mary Jane", "Tía May"];
}
