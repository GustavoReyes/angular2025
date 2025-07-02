export class Venta{
    idVenta:number;
    fecha:Date;
    //constructor con parámetros opcionales
    constructor(idVenta?:number, fecha?:Date){
        this.idVenta = idVenta || 0;
        this.fecha = fecha || new Date();
    }
}
