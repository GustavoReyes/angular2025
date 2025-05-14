import { Municipio } from './../model/Municipio';
import { Provincias } from './../model/Provincias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProvinciaMunicipioService {
  urlProvincias: string = "https://www.el-tiempo.net/api/json/v2/provincias"

  constructor(private http: HttpClient) { }

  obtenerProvincias(): Observable<Provincias[]> {
    return this.http.get<any>(this.urlProvincias).pipe(map(obj => obj.provincias))
  }

  obtenerMunicipios(cod: number): Observable<Municipio[]> {
    const url: string = `${this.urlProvincias}/${cod}/municipios`;
    return this.http.get<any>(url).pipe(map(obj => obj.municipios))
  }
}
