import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  nombre: string;
  mensaje: string;
  saludar() {
    this.mensaje = `Bienvenido a mi pagina sr/a ${this.nombre}`;
  }
}
