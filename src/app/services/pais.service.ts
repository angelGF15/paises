import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { fork } from 'node:child_process';

export interface Pais {
  nombre: string;
  country: string;
  lat: number;
  poblaciion?: number;
  timezone: string;
  bandera ?:string; 
}

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private readonly API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
  private readonly API_PAISES = 'https://restcountries.com/v3.1/name';
  private readonly PAISES_CENTROAMERICA = [
    'Honduras', 
    'Guatemala', 
    'El Salvador', 
    'Costa Rica', 
    'Nicaragua'
  ];

  constructor(private http: HttpClient) {}

  obtenerPaisesCentroamerica(): Observable<Pais[]> {
   
    const requests = this.PAISES_CENTROAMERICA.map(nombrePais => 
      forkJoin([
        this.http.get<any>(`${this.API_URL}?name=${nombrePais}`),
        this.http.get<any>(`${this.API_PAISES}/${nombrePais}`)
      ]).pipe(
        map(res => {
          const p = res[0].results[0];
          const bandera = res[1][0].flags?.png || '';
          return {
            nombre: p.name,
            country: p.country,
            lat: p.latitude,
            lon: p.longitude,
            poblacion: p.population,
            timezone: p.timezone,
            bandera: bandera
          };
        })
      )
    );

    
    return forkJoin(requests);
  }

  obtenerPaisPorNombre(nombre: string): Observable<Pais> {
    return this.http.get<any>(`${this.API_URL}?name=${nombre}`).pipe(
      map(res => {
        const p = res.results[0];
        return {
          nombre: p.name,
          country: p.country,
          lat: p.latitude,
          lon: p.longitude,
          poblacion: p.population,
          timezone: p.timezone
        };
      })
    );
  }
}