import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscapacidadesPageRoutingModule } from './discapacidades-routing.module';

import { DiscapacidadesPage } from './discapacidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscapacidadesPageRoutingModule
  ],
  declarations: [DiscapacidadesPage]
})
export class DiscapacidadesPageModule {}
