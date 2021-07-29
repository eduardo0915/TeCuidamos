import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedioAmbientePage } from './medio-ambiente.page';

const routes: Routes = [
  {
    path: '',
    component: MedioAmbientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedioAmbientePageRoutingModule {}
