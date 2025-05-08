import { ContactosService } from './../../service/contactos.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../model/Contacto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {
  contactos: Contacto[];
  constructor(contactosService: ContactosService) {
    this.contactos = contactosService.mostrar();
  }
}
