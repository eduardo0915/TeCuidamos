import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesBPageRoutingModule } from './detalles-b-routing.module';

import { DetallesBPage } from './detalles-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesBPageRoutingModule
  ],
  declarations: [DetallesBPage]
})
export class DetallesBPageModule {}
