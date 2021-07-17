import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientacionPageRoutingModule } from './orientacion-routing.module';

import { OrientacionPage } from './orientacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientacionPageRoutingModule
  ],
  declarations: [OrientacionPage]
})
export class OrientacionPageModule {}
