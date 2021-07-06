import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionBasicaPageRoutingModule } from './informacion-basica-routing.module';

import { InformacionBasicaPage } from './informacion-basica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionBasicaPageRoutingModule
  ],
  declarations: [InformacionBasicaPage]
})
export class InformacionBasicaPageModule {}
