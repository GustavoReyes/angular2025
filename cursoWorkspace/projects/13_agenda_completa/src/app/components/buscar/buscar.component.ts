import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../service/contactos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  email: string;
  contactoEncontrado: Contacto;
  constructor(private contactosService: ContactosService) {
  }

  buscar(){
    this.contactoEncontrado = this.contactosService.buscar(this.email)
  }
}
