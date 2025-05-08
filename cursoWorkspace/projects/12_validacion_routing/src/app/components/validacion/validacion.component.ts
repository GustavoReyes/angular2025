import { FormsModule } from '@angular/forms';
import { ClientesService } from './../../service/clientes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
usuario:string;
password:string;

constructor(private clientesService:ClientesService){}

validar(){
  let respuesta=this.clientesService.validar(this.usuario,this.password)
  if (respuesta){
    alert("Usuario Valido")
  } else {
    alert("No está registrado")
  }
}

}
