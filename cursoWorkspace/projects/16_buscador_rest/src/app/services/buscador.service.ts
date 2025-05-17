import { Datos } from './../../model/Datos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  urlDatos = "http://localhost:8000/buscador/"

  constructor(private http: HttpClient) { }

  buscar(tematica: string): Observable<Datos[]> {
    return this.http.get<Datos[]>(this.urlDatos + `buscar`, { params: { tematica: tematica } })
  }

  alta(item:Datos):Observable<void>{
    let head=new HttpHeaders();
    head.set("Content-Type","application/json")
    return this.http.post<void>(this.urlDatos + `alta`, item,{headers:head});
  }

  eliminar(tematica:string):Observable<Datos[]>{
    return this.http.delete<Datos[]>(this.urlDatos + `eliminar?tematica=`+tematica)

  }
}
