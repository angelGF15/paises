import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClimaPaisComponent } from './pages/clima-pais/clima-pais.component';
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';




const routes: Routes = [
  { path: 'clima', component: ClimaPaisComponent },
  { path: 'detalle', component: DetallePaisComponent },
  { path: '', redirectTo: 'clima', pathMatch: 'full' },
  { path: '**', redirectTo: 'clima' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
