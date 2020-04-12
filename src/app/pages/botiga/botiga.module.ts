import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotigaPageRoutingModule } from './botiga-routing.module';

import { BotigaPage } from './botiga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotigaPageRoutingModule
  ],
  declarations: [BotigaPage]
})
export class BotigaPageModule {}

