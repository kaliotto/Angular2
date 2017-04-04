import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadasComponent } from '../terminadas/terminadas.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PendientesComponent;
  tab2Root: any = TerminadasComponent;

  constructor() {

  }
}
