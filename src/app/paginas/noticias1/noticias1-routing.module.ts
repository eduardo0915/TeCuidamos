import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noticias1Page } from './noticias1.page';

const routes: Routes = [
  {
    path: '',
    component: Noticias1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noticias1PageRoutingModule {}
