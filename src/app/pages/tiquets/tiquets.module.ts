import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiquetsPageRoutingModule } from './tiquets-routing.module';

import { TiquetsPage } from './tiquets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiquetsPageRoutingModule
  ],
  declarations: [TiquetsPage]
})
export class TiquetsPageModule {}
