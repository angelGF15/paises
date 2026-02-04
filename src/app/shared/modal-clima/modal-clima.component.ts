import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-clima',
  templateUrl: './modal-clima.component.html',
  styleUrl: './modal-clima.component.css'
})
export class ModalClimaComponent implements OnInit {
clima: any = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const { lat, lon } = this.data;

    this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
      .subscribe((res: any) => {
        this.clima = res.current_weather;
      });
  }
}
