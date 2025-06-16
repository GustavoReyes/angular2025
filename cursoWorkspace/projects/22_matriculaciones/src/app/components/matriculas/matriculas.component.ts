import { Component } from '@angular/core';
import { Curso } from '../../../model/Curso';
import { MatriculasService } from '../../service/matriculas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Matricula } from '../../../model/Matriculas';

@Component({
  selector: 'app-matriculas',
  imports: [CommonModule, FormsModule],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css'
})
export class MatriculasComponent {
cursos:Curso[];
cursoSeleccionado:number;
matriculas:Matricula[]

  constructor(private matriculaService:MatriculasService){
    this.matriculaService.buscarCursos().subscribe(data=>this.cursos=data)
  }

  getAlumnosMatriculados(idCursoSeleccionado:number){
    this.matriculaService.buscarMatriculas(idCursoSeleccionado).subscribe(
      data => {
        this.matriculas = data;
        console.log("Alumnos matriculados", this.matriculas);
      }
    )
  }

}

