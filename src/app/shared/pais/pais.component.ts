import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent {

  @Input() pais!: any;   

  @Output() verClima = new EventEmitter<any>();
  @Output() verDetalle = new EventEmitter<any>();
  @Input() mostrarClima: boolean = false;
  @Input() mostrarDetalle: boolean = false;

 clima(boton: HTMLButtonElement) {
  boton.blur();              
  this.verClima.emit(this.pais);
}

detalle(boton: HTMLButtonElement) {
  boton.blur();              
  this.verDetalle.emit(this.pais);
}

}
