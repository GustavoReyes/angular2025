import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { AgendaService } from '../service/AgendaService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  email:string;
  telefono:string;
  contactos:Contacto[];
  agenda:AgendaService;
  constructor(){
    this.agenda=new AgendaService();
  }
  guardar(){
    let contacto=new Contacto(this.nombre,this.email,this.telefono);
    this.agenda.guardar(contacto);
  }
  eliminar(indice:number){
    this.agenda.eliminar(indice);
  }
  mostrar(){
    this.contactos=this.agenda.recuperar();
  }
}
