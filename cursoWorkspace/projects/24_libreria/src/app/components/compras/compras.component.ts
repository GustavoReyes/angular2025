import { Component } from '@angular/core';
import { Compra } from '../../model/Compra';
import { LibreriaService } from '../../service/libreria/libreria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  imports: [CommonModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  compras:Compra[];
  constructor(libreriaService:LibreriaService){
    libreriaService.compra().subscribe(data=>this.compras=data)
    console.log(this.compras);
  }
}
