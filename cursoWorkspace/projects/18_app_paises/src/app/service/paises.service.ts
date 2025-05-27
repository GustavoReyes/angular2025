import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({ providedIn: 'root' })

export class PaisesService {
  url: string = "http://localhost:3000/paises/";

  constructor(private http: HttpClient) { }

  //método que devuelva un OBERVABLE con un array de string (nombres de continente)
  continentes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}continentes`) //Observable<Pais[]>;
  }

  //método que devuelve un observable con los pasises del continente recibido
  paisesContinente(continente: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}paisesContinente/${continente}`) //Observable<Pais[]>
  }
}

