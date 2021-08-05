import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexgymPageRoutingModule } from './indexgym-routing.module';

import { IndexgymPage } from './indexgym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexgymPageRoutingModule
  ],
  declarations: [IndexgymPage]
})
export class IndexgymPageModule {}
