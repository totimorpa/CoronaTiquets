import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuportPageRoutingModule } from './suport-routing.module';

import { SuportPage } from './suport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuportPageRoutingModule
  ],
  declarations: [SuportPage]
})
export class SuportPageModule {}
