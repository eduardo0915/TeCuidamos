import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscapacidadesPage } from './discapacidades.page';

const routes: Routes = [
  {
    path: '',
    component: DiscapacidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscapacidadesPageRoutingModule {}
