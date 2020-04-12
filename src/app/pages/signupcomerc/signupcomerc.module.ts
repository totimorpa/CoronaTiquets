import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupcomercPageRoutingModule } from './signupcomerc-routing.module';

import { SignupcomercPage } from './signupcomerc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupcomercPageRoutingModule
  ],
  declarations: [SignupcomercPage]
})
export class SignupcomercPageModule {}
