import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexnoticiasPage } from './indexnoticias.page';

const routes: Routes = [
  {
    path: '',
    component: IndexnoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexnoticiasPageRoutingModule {}
