import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../../model/Curso';
import { Observable } from 'rxjs';
import { Matricula } from '../../model/Matriculas';
import { urlBase } from '../utilities/Constants';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  constructor(private http:HttpClient) { }

  buscarCursos():Observable<Curso[]>{
      const url:string =`${urlBase}/cursos`;
      return this.http.get<Curso[]>(url);
      }

  buscarMatriculas(idCurso:number):Observable<Matricula[]>{
      const url:string =`${urlBase}/matriculas/${idCurso}`;
      return this.http.get<Matricula[]>(url);
      }
}

