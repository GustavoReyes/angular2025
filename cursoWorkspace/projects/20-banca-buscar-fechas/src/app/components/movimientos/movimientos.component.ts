import { MovimientosService } from './../../../service/movimientos.service';
import { Movimiento } from './../../../model/Movimientos';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  imports: [CommonModule, FormsModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {
fecha1:Date;
fecha2:Date;
movimientos:Movimiento[]=[]

  constructor(private movimientosService:MovimientosService){}

  buscarFechas(){
    this.movimientosService.buscarFechas(this.fecha1, this.fecha2).subscribe(datos=>this.movimientos=datos)

  }
}
