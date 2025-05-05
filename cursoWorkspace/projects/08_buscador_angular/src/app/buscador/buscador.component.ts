import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pagina } from '../model/Pagina';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  datos = [
    new Pagina("Deportes", "http://www.marca.es"),
    new Pagina("Libros", "http://www.puntolibro.es"),
    new Pagina("Deportes", "http://www.todofutbol.com"),
    new Pagina("Libros", "http://www.fnac.es"),
    new Pagina("Cocina", "http://www.fogones.es"),
    new Pagina("Juegos", "http://www.game.es")
  ];
  //Para guardar la tematica seleccionada
  tematicaSeleccinada: string;
  //Para mostrar el resultado seleccionado
  resultado: Pagina[];

  tematicas: Set<string>;
    constructor() {
    this.tematicas = new Set(this.datos.map(p => p.tematica));
  }

  obtenerResultado(): void {
    this.resultado = this.datos.filter(p => p.tematica == this.tematicaSeleccinada || "todos" == this.tematicaSeleccinada)
  }
}
