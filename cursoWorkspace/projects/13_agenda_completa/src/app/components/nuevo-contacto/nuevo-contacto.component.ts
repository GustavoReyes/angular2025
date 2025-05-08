import { ContactosService } from './../../service/contactos.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../model/Contacto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nuevo-contacto',
  imports: [FormsModule, RouterModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrl: './nuevo-contacto.component.css'
})
export class NuevoContactoComponent {
  nombre: string;
  email: string;
  telefono: string;
  constructor(private contactosService: ContactosService) { }

  guardar() {
    if (this.contactosService.arrayContacto.some(z => z.email == this.email)) {
      alert("¡Este contacto existe!")
    }else{
      let contacto = new Contacto(this.nombre, this.email, this.telefono);
      this.contactosService.guardar(contacto);
      alert("Contacto agregado exitosamente");
      this.limpiar();
    }
  }
  limpiar(){
    this.nombre="";
    this.email="";
    this.telefono="";
  }
}
