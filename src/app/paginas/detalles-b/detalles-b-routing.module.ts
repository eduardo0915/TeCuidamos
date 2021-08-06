import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesBPage } from './detalles-b.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesBPageRoutingModule {}
