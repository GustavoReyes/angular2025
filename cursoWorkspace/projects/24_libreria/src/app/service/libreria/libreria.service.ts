import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { Observable } from 'rxjs';
import { Libro } from '../../model/Libro';
import { Compra } from '../../model/Compra';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
  urlApi: string = 'http://localhost:4000/librerias'

  constructor(private http: HttpClient) { }

  autenticar(usuario: string, password: string): Observable<Cliente> {
    return this.http.post<any>(`${this.urlApi}/autenticar`, { "usuario": usuario, "password": password },{ withCredentials: true })
  }

  catalogo(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.urlApi}/catalogo`)
  }

  compra(): Observable<Compra[]> {
    return this.http.get<Compra[]>(`${this.urlApi}/compras`, { withCredentials: true })
  }
}
