import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {DetalleComponent} from './components/detalle/detalle.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: 'detalle/:id/:pag', component: DetalleComponent },
  { path: 'detalle/:id/:pag/:termino', component: DetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
