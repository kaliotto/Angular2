import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadasComponent } from '../pages/terminadas/terminadas.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';

//services
import { TareasService } from './services/tareas.service';

//pipes
import { SinNombre } from './pipes/sinNombre.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadasComponent,
    AgregarComponent,
    SinNombre
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadasComponent,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TareasService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
