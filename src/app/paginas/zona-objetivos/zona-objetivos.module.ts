import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaObjetivosPageRoutingModule } from './zona-objetivos-routing.module';

import { ZonaObjetivosPage } from './zona-objetivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaObjetivosPageRoutingModule
  ],
  declarations: [ZonaObjetivosPage]
})
export class ZonaObjetivosPageModule {}
