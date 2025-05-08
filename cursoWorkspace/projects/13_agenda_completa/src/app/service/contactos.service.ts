import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  arrayContacto: Contacto[] = []

  guardar(c: Contacto):void{
  this.arrayContacto.push(c)
  }

  buscar(email:string):Contacto{
    return this.arrayContacto.find(m => m.email);
  }

  mostrar():Contacto[]{
    return this.arrayContacto
  }
}
