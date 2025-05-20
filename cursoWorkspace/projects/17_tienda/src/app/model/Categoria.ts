export class Categoria {
  id: number
  nombre: string;
  proveedor: string;
  constructor(id: number, nombre: string, proveedor: string) {
    this.id = id;
    this.nombre = nombre;
    this.proveedor = proveedor;
  }
}

