import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendariPageRoutingModule } from './calendari-routing.module';

import { CalendariPage } from './calendari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendariPageRoutingModule
  ],
  declarations: [CalendariPage]
})
export class CalendariPageModule {}
