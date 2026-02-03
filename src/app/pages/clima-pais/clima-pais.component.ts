import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClimaComponent } from '../../modal-clima/modal-clima.component';
import { PaisService, Pais } from '../../services/pais.service';
@Component({
  selector: 'app-clima-pais',
  templateUrl: './clima-pais.component.html',
  styleUrl: './clima-pais.component.css'
})
export class ClimaPaisComponent implements OnInit {

  paises: Pais[] = [];
  cargando = true; 

  constructor(private paisService: PaisService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.paisService.obtenerPaisesCentroamerica().subscribe({
      next: (paises) => {
        this.paises = paises;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar países:', error);
        this.cargando = false;
      }
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
