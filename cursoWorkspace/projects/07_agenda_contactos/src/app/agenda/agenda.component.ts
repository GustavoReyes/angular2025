import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/contacto';


@Component({
  selector: 'app-agenda',
  imports: [FormsModule, CommonModule,],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre: string;
  email: string;
  telefono: string;
  agenda: Contacto[] = [];
  visible: boolean = false;

  guardar(): void {
    let c = new Contacto(this.nombre, this.email, this.telefono)
    this.agenda.push(c)
  }
  mostrar(): void {
    this.visible = !this.visible;
  }

  eliminar(e:number): void {
    this.agenda.splice(e, 1)
  }
}
