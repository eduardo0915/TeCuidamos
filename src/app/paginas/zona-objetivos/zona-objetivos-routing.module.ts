import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaObjetivosPage } from './zona-objetivos.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaObjetivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaObjetivosPageRoutingModule {}
