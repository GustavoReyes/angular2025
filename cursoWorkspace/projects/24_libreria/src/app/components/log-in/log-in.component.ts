import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';
import { LibreriaService } from '../../service/libreria/libreria.service';


@Component({
  selector: 'app-log-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  usuario:string;
  password:string;
  email:string;
  mensaje:string;
  constructor(private libreriaService:LibreriaService,private dialog:MatDialog){}

  login(form){
    if(form.invalid){
      
this.dialog.open
(CuadroDialogoComponent,{
        data:{mensaje:"Los datos del formulario no son válidos!!!"}
      });
      return;
    }else{
      
this.dialog.open
(CuadroDialogoComponent,{
        data:{mensaje:"Los datos del formulario tienen formato correcto, ahora vamos a validarate"}
      });

    this.libreriaService.autenticar(this.usuario,this.password)
    .subscribe(data=>{
      if(data){
        this.mensaje="Usuario válido";
      }else{
        this.mensaje="Usuario no válido";
      }
    });

    }

  }
} 