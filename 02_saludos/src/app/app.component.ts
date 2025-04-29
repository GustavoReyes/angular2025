import { Component } from '@angular/core';
// { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/* Tipos de variables en typescript

void
number
string
boolean

declaracion de variables

edad:number;
edad=20;
const descuento:number=10;

iva:boolean = true;

en funciones:
**Las funciones de metodos siempre son VOID porque no devuelven nada**
**Siempre declarar los tipos**
mensaje():void{}

*/
export class AppComponent {
  //const descuento:number=10;
  saludar(): void {
    //recoger en una variable el objeto etiqueta input
    let caja: any = document.getElementById("nombre")
    //recoge el objeto div en una variable
    let res: any = document.getElementById("mensaje")
    res.innerHTML = `<b>Bienvenido a mi pagina Sr/a.${caja.value}</b>`
  }
}
