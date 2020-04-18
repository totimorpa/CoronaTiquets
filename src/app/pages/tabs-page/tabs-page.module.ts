import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { MapModule } from '../map/map.module';
import { TiquetsUsuariModule } from '../tiquets-usuari/tiquets-usuari.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { DetallsBotigaModule } from '../detalls-botiga/detalls-botiga.module';
import { LlistaBotiguesModule } from '../llista-botigues/llista-botigues.module';
import { BotigaPageModule } from '../botiga/botiga.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapModule,
    TiquetsUsuariModule,
    SessionDetailModule,
    DetallsBotigaModule,
    LlistaBotiguesModule,
    TabsPageRoutingModule,
    BotigaPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
