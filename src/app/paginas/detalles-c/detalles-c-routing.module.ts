import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCPage } from './detalles-c.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCPageRoutingModule {}
