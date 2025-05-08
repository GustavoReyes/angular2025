import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../service/clientes.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})

export class ClienteComponent {
  usuario:string;
  password:string;
  email:string;
  telefono:string;
  visible:boolean=false

  constructor(private clientesService:ClientesService){

  }
  validar():void{
    const validacion:boolean=this.clientesService.validar(this.usuario,this.password);
    if(validacion){
      alert("Usuario válido!!!");
    }else{
      alert("No estás registrado!!!");
    }
  }
  registrar():void{
    let c:Cliente=new Cliente(this.usuario,this.password,this.email,this.telefono);
    this.clientesService.registrar(c);
    this.visible=false;
  }
  registrarse():void{
    this.visible=true;
  }
}


