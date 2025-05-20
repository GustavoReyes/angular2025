import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../model/Producto';
import { Categoria } from '../../model/Categoria';
import { TiendaService } from '../../services/tienda.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tienda-alta',
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './tienda-alta.component.html',
  styleUrl: './tienda-alta.component.css'
})
export class TiendaAltaComponent {
  //objeto producto que se rellena con los datos de los campos de texto
  producto: Producto = new Producto();
  categorias:Categoria[];
  id:number

  constructor(private tiendaService: TiendaService) {
     this.tiendaService.categorias()
      .subscribe(data => this.categorias = data);
  }

  altaProducto() {
    this.tiendaService.altaProducto(this.producto).subscribe();
  }
}
