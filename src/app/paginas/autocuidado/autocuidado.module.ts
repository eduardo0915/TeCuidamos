import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutocuidadoPageRoutingModule } from './autocuidado-routing.module';

import { AutocuidadoPage } from './autocuidado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutocuidadoPageRoutingModule
  ],
  declarations: [AutocuidadoPage]
})
export class AutocuidadoPageModule {}
