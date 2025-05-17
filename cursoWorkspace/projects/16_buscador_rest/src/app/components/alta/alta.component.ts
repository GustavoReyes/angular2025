import { Component } from '@angular/core';
import { Datos } from '../../../model/Datos';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../../services/buscador.service';

@Component({
  selector: 'app-alta',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  url: string;
  tematica: string;
  descripcion: string;

  constructor(private altaServicio: BuscadorService) { }

  guardar():void{
    const items = new Datos(this.url,this.tematica,this.descripcion);
    this.altaServicio.alta(items).subscribe()
    console.log(items);
   }

}
