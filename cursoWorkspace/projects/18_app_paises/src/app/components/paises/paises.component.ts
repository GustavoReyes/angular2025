import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continentes:string[];
  continenteSeleccionado: string;
  paisesContinente: Pais[];
  constructor(private paisesService: PaisesService) {
    this.paisesService.continentes().subscribe(resultado => this.continentes = resultado);


    /*  PARA VER TODOS LOS PAISES
    verPaises(): void {
      //en la suscripcion al observable le dicemos que tiene que hacer con los datos de respuesta
      //En nuestro caso, esos datos se guardan en la variable Paises.
      this.paisesService.obtenerPaises() //Obervable<Pais[]>
        .subscribe(data => this.paises = data)
    }*/
  }
  cargarPaisesContinente():void{
    this.paisesService.paisesContinente(this.continenteSeleccionado)//Observable<Pais[]>
    .subscribe(resultado=>this.paisesContinente=resultado);

}
}

/*
continentes:string[];
  continenteSeleccionado:string;
  paisesContinente:Pais[];
  constructor(private paisesService:PaisesService){
    this.paisesService.continentes() //Observable<string[]>
    .subscribe(resultado=>this.continentes=resultado);
  }
  cargarPaisesContinente():void{
    this.paisesService.paisesContinente(this.continenteSeleccionado)//Observable<Pais[]>
    .subscribe(resultado=>this.paisesContinente=resultado);

}*/
