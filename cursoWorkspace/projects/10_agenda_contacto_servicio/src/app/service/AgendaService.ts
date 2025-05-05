import { Contacto } from "../model/Contacto";

export class AgendaService{
  agenda:Contacto[]=[];
  guardar(contacto:Contacto):void{
    this.agenda.push(contacto);
  }
  eliminar(posicion:number):void{
    this.agenda.splice(posicion,1);
  }
  recuperar():Contacto[]{
    return this.agenda;
  }
}
