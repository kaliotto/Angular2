import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {

  usuario:Object={
    nombre:null,
    apellido:null,
    correo:null,
    pais:"",
    sexo:null,
    acepta: false
  };

  paises=[{
    codigo:"es",
    pais: "España"
  },
  {
    codigo:"cri",
    pais: "Costa Rica"
  }];

  constructor() { }

  guardar(forma:NgForm) {
    console.log(forma)
    console.log(this.usuario)
  }

}
