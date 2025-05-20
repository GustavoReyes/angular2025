export class Producto {
  codigo: number;
  nombre: string;
  precio: number;
  idCategoria: number;
  categoria:string
  constructor(codigo?: number, nombre?: string, precio?: number, categoria?: string, idCategoria?:number) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.idCategoria = idCategoria;
  }
}

