import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Contacto } from '../../model/Contacto';
import { ContactoService } from '../../service/contacto.service';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-alta',
  imports: [CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje: string;
  contacto: Contacto = new Contacto();
  constructor(private contactosService: ContactoService) { }

  /* alta(){
    this.contactosService.alta(this.contacto).subscribe({
      next: data=>this.mensaje='Contacto Agregado',
      error: err=>this.mensaje='No se pudo dar de alta al contacto'
    })
  } */

  alta() {
    this.contactosService.alta(this.contacto).subscribe(
      data => this.mensaje = data ? 'Contacto Agregado' : 'No se pudo agreagar el contacto')
  }
}

