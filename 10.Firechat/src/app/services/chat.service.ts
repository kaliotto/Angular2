import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import {Mensaje} from '../interfaces/mensaje';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  usuario: any = {};

  constructor(private af: AngularFire) {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    } else {
      this.usuario = null;
    }
  }

  cargarMensajes() {
    this.chats = this.af.database.list('chats', {
      query: {
        limistToLast: 20,
        orderByKey: true
      }
    });
    return this.chats;
  }

  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: this.usuario.auth.displayName,
      mensaje: texto,
      uid: this.usuario.uid
    }

    return this.chats.push(mensaje);
  }

  login(proveedor: string) {
    let provider: AuthProviders;

    if (proveedor == "google") {
      provider = AuthProviders.Google;
    } else if (proveedor == "twitter") {
      provider = AuthProviders.Twitter;
    } else if (proveedor == "facebook") {
      provider = AuthProviders.Facebook;
    }

    this.af.auth.login({
      provider: provider,
      method: AuthMethods.Popup,
    }).then(data => {
      this.usuario = data;
      localStorage.setItem('usuario', JSON.stringify(data));
    });
  }

  logout() {
    localStorage.removeItem('usuario');
    this.usuario = null;
    this.af.auth.logout();
  }
}
