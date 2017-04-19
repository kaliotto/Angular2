import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    universo: "Marvel",
    bio: ""
  };

  id: string;

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(parametros => {
      this.id = parametros.id;
      if (this.id != "nuevo") {
        this._heroesService.getHeroe(this.id)
          .subscribe(data => this.heroe = data);
      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    if (this.id == "nuevo") {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          this._router.navigate(['/heroe', data.name])
        });
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe();
    }
  }

  agregarNuevo(formulario: NgForm) {
    this._router.navigate(['/heroe', 'nuevo']);
    formulario.reset({
      universo: "Marvel"
    });
  }

}
