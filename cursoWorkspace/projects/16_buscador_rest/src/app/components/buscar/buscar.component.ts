import { Component } from '@angular/core';
import { BuscadorService } from '../../services/buscador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Datos } from '../../../model/Datos';

@Component({
  selector: 'app-buscar',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  tematicas:any[]=[]
  tematicaSel:string;

  constructor(private buscadorService:BuscadorService){

  }
  buscar(){
    this.buscadorService.buscar(this.tematicaSel).subscribe(datos=>this.tematicas=datos)
    console.log(this.buscadorService.buscar(this.tematicaSel));
  }

}

