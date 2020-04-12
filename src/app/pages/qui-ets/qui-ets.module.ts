import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiEtsPageRoutingModule } from './qui-ets-routing.module';

import { QuiEtsPage } from './qui-ets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiEtsPageRoutingModule
  ],
  declarations: [QuiEtsPage]
})
export class QuiEtsPageModule {}
