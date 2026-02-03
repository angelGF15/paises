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

  @Output() verClima = new EventEmitter<any>();
  @Output() verDetalle = new EventEmitter<any>();

  

 clima(boton: HTMLButtonElement) {
  boton.blur();              
  this.verClima.emit(this.pais);
}

detalle(boton: HTMLButtonElement) {
  boton.blur();              
  this.verDetalle.emit(this.pais);
}

}
