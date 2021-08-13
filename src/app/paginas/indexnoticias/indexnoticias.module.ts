import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexnoticiasPageRoutingModule } from './indexnoticias-routing.module';

import { IndexnoticiasPage } from './indexnoticias.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    IonicModule,
    CommonModule,
    IndexnoticiasPageRoutingModule
  ],
  declarations: [IndexnoticiasPage]
})
export class IndexnoticiasPageModule {}
