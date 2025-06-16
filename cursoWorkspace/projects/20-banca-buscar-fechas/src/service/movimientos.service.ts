import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from '../model/Movimientos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  urlDatos = 'http://localhost:3000/movimientos/'

  constructor(private http: HttpClient) { }

  buscarFechas(fecha1: Date, fecha2: Date): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(`${this.urlDatos}fechas2?fecha1=${fecha1}&fecha2=${fecha2}`)
  }

}
