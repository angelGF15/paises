import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../../services/pais.service'; 

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})

export class PaisComponent {

  @Input() pais!: Pais;  

  @Input() mostrarClima: boolean = false;
  @Input() mostrarDetalle: boolean = false;

  @Output() verAccion = new EventEmitter<any>();

  get mostrarBoton(): boolean {
    return this.mostrarClima || this.mostrarDetalle;
  }

  get etiquetaBoton(): string {
    return this.mostrarClima ? 'Ver Clima' : 'Ver Detalle';
  }
  
  get iconoBoton(): string {
    return this.mostrarClima ? '🌤️' : '📋';
  }

  accion(boton: HTMLButtonElement) {
    boton.blur();
    this.verAccion.emit(this.pais);
  }
}