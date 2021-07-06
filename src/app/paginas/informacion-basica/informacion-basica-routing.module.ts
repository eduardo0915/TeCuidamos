import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionBasicaPage } from './informacion-basica.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionBasicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionBasicaPageRoutingModule {}
