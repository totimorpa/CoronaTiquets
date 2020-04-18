import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { TiquetsUsuariPage } from '../tiquets-usuari/tiquets-usuari';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tiquets-usuari',
        children: [
          {
            path: '',
            component: TiquetsUsuariPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'botigues',
        children: [
          {
            path: '',
            loadChildren: () => import('../llista-botigues/llista-botigues.module').then(m => m.LlistaBotiguesModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'detalls-botiga/:speakerI',
            loadChildren: () => import('../detalls-botiga/detalls-botiga.module').then(m => m.DetallsBotigaModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/app/tabs/tiquets-usuari',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

