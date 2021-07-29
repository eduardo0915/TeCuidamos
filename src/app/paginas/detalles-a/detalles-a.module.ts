import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesAPageRoutingModule } from './detalles-a-routing.module';

import { DetallesAPage } from './detalles-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesAPageRoutingModule
  ],
  declarations: [DetallesAPage]
})
export class DetallesAPageModule {}
