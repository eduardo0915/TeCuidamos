import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedioAmbientePageRoutingModule } from './medio-ambiente-routing.module';

import { MedioAmbientePage } from './medio-ambiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedioAmbientePageRoutingModule
  ],
  declarations: [MedioAmbientePage]
})
export class MedioAmbientePageModule {}
