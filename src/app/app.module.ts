import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClimaPaisComponent } from './pages/clima-pais/clima-pais.component';
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';
import { PaisComponent } from './shared/pais/pais.component';
import { NavbardComponent } from './shared/navbard/navbard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalClimaComponent } from './modal-clima/modal-clima.component';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';

@NgModule({
  declarations: [
    AppComponent,

    ClimaPaisComponent,
    DetallePaisComponent,
    PaisComponent,
    NavbardComponent,
    ModalClimaComponent,
    ModalDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
