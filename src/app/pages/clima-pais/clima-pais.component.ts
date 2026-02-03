import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalClimaComponent } from '../../modal-clima/modal-clima.component';

@Component({
  selector: 'app-clima-pais',
  templateUrl: './clima-pais.component.html',
  styleUrl: './clima-pais.component.css'
})
export class ClimaPaisComponent implements OnInit {
  paises: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    const centroAmerica = ['Honduras', 'Guatemala', 'El Salvador', 'Costa Rica', 'Nicaragua'];

    centroAmerica.forEach(pais => {
      this.http.get(`https://geocoding-api.open-meteo.com/v1/search?name=${pais}`)
        .subscribe((res: any) => {
          const p = res.results[0];
          this.paises.push({
            nombre: p.name,
            country: p.country,
            lat: p.latitude,
            lon: p.longitude
          });
        });
    });
  }

  abrirClima(pais: any) {
  this.dialog.open(ModalClimaComponent, {
    width: '800px',
    maxWidth: '95vw',
    height: 'auto',
    panelClass: 'modal-clima-grande',
    data: pais
  });
}
}
