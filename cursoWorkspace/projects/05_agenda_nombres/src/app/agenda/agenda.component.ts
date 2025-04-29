import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre: string;
  agenda: string[] = [];
  agendaSinD = new Set();
  visible: boolean = false;

  guardar(): void {
    /*
      Otra forma verificando si existe el nombre

      if(this.agenda.some(c=>c==this.nombre)==false){
        this.agenda.push(this.nombre)}
    */

        //this.agenda.push(this.nombre)
    this.agendaSinD.add(this.nombre);
  }
  mostrar(): void {

    /*
       Manera de hacer visible o invisible el codigo de la etiqueta con *ngIf=""
       if (this.visible) {
         this.visible = false;
       } else {
         this.visible = true
       } */
    this.visible = !this.visible
  }
}
