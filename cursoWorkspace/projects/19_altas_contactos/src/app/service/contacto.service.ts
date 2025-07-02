import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = "http://localhost:3000/contactos/"
  constructor(private http: HttpClient) { }

  //EL posible error 409 se captura en el componente
  /*  alta(contacto: Contacto): Observable<any> {
     return this.http.post(this.url + 'alta', contacto)
   } */

  alta(contacto: Contacto): Observable<boolean> {
    return this.http.post(this.url + 'alta', contacto)
      .pipe(map(() => true),
        catchError(_e => of(false)))
  }
}
