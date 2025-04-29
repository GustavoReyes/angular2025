import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numero1: number;
  numero2: number;
  resultado: string;
  sumar() {
    let suma: number = this.numero1 + this.numero2
    this.resultado = `La suma es ${suma}`
  }
  multiplicar() {
    let multiplicar: number = this.numero1 * this.numero2
    this.resultado = `La multiplicación es ${multiplicar}`
  }
}
