import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TiquetsUsuariPage } from './tiquets-usuari';
import { TiquetsUsuariPageRoutingModule } from './tiquets-usuari-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiquetsUsuariPageRoutingModule
  ],
  declarations: [
    TiquetsUsuariPage
  ],
})
export class TiquetsUsuariModule { }
