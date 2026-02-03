import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalleComponent } from '../../modal-detalle/modal-detalle.component';


@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})

export class DetallePaisComponent implements OnInit {
  paises: any[] = [];
  paisSeleccionado: any = null;  // Aquí guardaremos el país al que le dan clic

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
            lon: p.longitude,
            poblacion: p.population,      // datos extra que solo usará Detalle
            timezone: p.timezone
          });
        });
    });
  }

  mostrarDetalle(pais: any) {
  this.dialog.open(ModalDetalleComponent, {
    width: '800px',
    maxWidth: '95vw',
    height: 'auto',
    data: pais
  });
}
}
