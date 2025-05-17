import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BuscadorService } from '../../services/buscador.service';
import { Datos } from '../../../model/Datos';

@Component({
  selector: 'app-eliminar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  url:string
tematica:string
tematicas:Datos[]=[]

constructor(private eliminarService:BuscadorService){}
  buscar(){
    this.eliminarService.buscar(this.tematica).subscribe(datos=>this.tematicas=datos)
    console.log(this.eliminarService.buscar(this.tematica));
  }
  eliminar(){
    this.eliminarService.eliminar(this.tematica).subscribe()
  }
}
