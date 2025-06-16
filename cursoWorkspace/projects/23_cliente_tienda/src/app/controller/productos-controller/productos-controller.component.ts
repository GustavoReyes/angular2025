import { Component } from '@angular/core';
import { TiendaService } from '../../service/tienda-service.service';
import { Producto } from '../../model/Producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-controller',
  imports: [CommonModule],
  templateUrl: './productos-controller.component.html',
  styleUrl: './productos-controller.component.css'
})
export class ProductosControllerComponent {
productos:Producto[];
  constructor(private tiendaService:TiendaService){

  }
  mostrar(){
    this.tiendaService.productos().subscribe(data=>this.productos=data);
  }
}
