import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCPageRoutingModule } from './detalles-c-routing.module';

import { DetallesCPage } from './detalles-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCPageRoutingModule
  ],
  declarations: [DetallesCPage]
})
export class DetallesCPageModule {}
