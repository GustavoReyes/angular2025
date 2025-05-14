import { Component } from '@angular/core';
import { ProvinciaMunicipioService } from '../../services/provincia-municipio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Provincias } from '../../model/Provincias';
import { Municipio } from '../../model/Municipio';

@Component({
  selector: 'app-provincia',
  imports: [CommonModule, FormsModule],
  templateUrl: './provincia.component.html',
  styleUrl: './provincia.component.css'
})
export class ProvinciaComponent {
  provincia: Provincias[];
  municipio: Municipio[];
  codigoProvinciaSel:number;

  constructor(private provinciaService: ProvinciaMunicipioService) {
    this.provinciaService.obtenerProvincias().subscribe(data=>this.provincia=data)
  }
  verMunicipios():void{
  this.provinciaService.obtenerMunicipios(this.codigoProvinciaSel)
    .subscribe(data => this.municipio = data)
  }
}
