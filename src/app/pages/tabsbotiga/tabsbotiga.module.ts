import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsbotigaPageRoutingModule } from './tabsbotiga-routing.module';
import { TabsbotigaPage } from './tabsbotiga.page';
import { TiquetsPageModule } from '../tiquets/tiquets.module';
import { BotigaPageModule } from '../botiga/botiga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsbotigaPageRoutingModule,
    TiquetsPageModule,
    BotigaPageModule
  ],
  declarations: [TabsbotigaPage]
})
export class TabsbotigaPageModule {}
