import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../model/Categoria';
import { Producto } from '../../model/Producto';
import { TiendaService } from '../../services/tienda.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tienda-buscar',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './tienda-buscar.component.html',
  styleUrl: './tienda-buscar.component.css'
})
export class TiendaBuscarComponent {
  nombre: string;
  categorias: Categoria[];
  productos: Producto[];

  constructor(private tiendaService: TiendaService) {
    this.tiendaService.categorias()
      .subscribe(data => this.categorias = data);
  }

  buscarProductos(): void {
    if (this.nombre) {
      this.tiendaService.buscarProductos(this.nombre)
        .subscribe(data => this.productos = data);
    }
  }
  eliminarProducto(codigo: number): void {
    this.tiendaService.eliminarProducto(codigo).subscribe();
  }
}
