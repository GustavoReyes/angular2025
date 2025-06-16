export class Movimiento {
    idCuenta: number;
    fecha: Date;
    cantidad: number;
    operacion: string;
    constructor(idCuenta?: number, fecha?: Date, cantidad?: number, operacion?: string) {
        this.idCuenta = idCuenta || 0; //Si no se proporciona se inicializa en 0
        this.fecha = fecha || new Date(); //Si no se proporciona se inicializa en 0
        this.cantidad = cantidad || 0; //Si no se proporciona se inicializa en la fecha actual
        this.operacion = operacion || ''; //Si no se proporciona se inicializa en vacia
    }
}
