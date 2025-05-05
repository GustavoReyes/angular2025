import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-notas',
  imports: [FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  nota: number;
  notas: number[] = []
  media: number;
  m: number = 0;
  baja: number = this.notas[0];
  alta: number = this.notas[0];
  aprobados: number[] = [];

  guardar(): void {
    this.notas.push(this.nota);
    console.log(this.notas);
  }

  datos(): void {
    //Nota Promedio
    this.notas.forEach((n) => {
      this.m = this.m + n;
    })
    this.media = this.m / this.notas.length;

    //Nota más alta
    this.notas.forEach(n => {
      if (n > this.alta) {
        this.alta = n
      }
    })

    //Nota más Baja
    this.notas.forEach(n => {
      if (n < this.baja) {
        this.baja = n
      }
    })

    //Aprobados
    this.notas.forEach(n => {
      if (n >= 5) {
        this.aprobados.push(n)
      }
    })

  }
}
/*
OTRA FORMA DE CALCULAR

//variables
  notas:number[]=[];
  nota:number;
  media:number;
  alta:number;
  baja:number;
  aprobados:number;

  //métodos de respuesta a eventos
  **Guardar los datos**

  guardar():void{
    this.notas.push(this.nota);
  }
  datos():void{
    this.media=this.calculaMedia();
    this.alta=this.calcularAlta();
    this.baja=this.calcularBaja();
    this.aprobados=this.totalAprobados();
  }

  //estos métodos son para uso interno de los métodos
  //de evento

  calculaMedia():number{
    let suma:number=this.notas.reduce((a,b)=>a+b);
    return suma/this.notas.length;
  }
  calcularAlta():number{
    let max=this.notas[0];
    this.notas.forEach(n=>{
      if(n>max){
        max=n;
      }
    });
    return max;
  }
  calcularBaja():number{
    let min=this.notas[0];
    this.notas.forEach(n=>{
      if(n<min){
        min=n;
      }
    });
    return min;
  }
  totalAprobados():number{

  /*let total=0;
    this.notas.forEach(n=>{
      if(n>=5){
        total++;
      }
    });
    return total;

    *** ESTO ES IGUAL PERO EN UNA SOLA LINEA DE CODIGO ***
    return this.notas.filter(n=>n>=5).length;


*/
