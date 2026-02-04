import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalleComponent } from '../../shared/modal-detalle/modal-detalle.component';
import { PaisService, Pais } from '../../services/pais.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})

export class DetallePaisComponent implements OnInit {
  paises: Pais [] = [];
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
  
  mostrarDetalle(pais: any) {
  this.dialog.open(ModalDetalleComponent, {
    width: '800px',
    maxWidth: '95vw',
    height: 'auto',
    data: pais
  });
}
}
