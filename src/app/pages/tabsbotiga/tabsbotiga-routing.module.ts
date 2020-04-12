import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsbotigaPage } from './tabsbotiga.page';
import { BotigaPage } from '../botiga/botiga.page';


const routes: Routes = [
  {
    path: 'tabsbotiga',
    component: TabsbotigaPage,
    children: [
      {
        path: 'botiga',
        children: [
          {
            path: '',
            component: BotigaPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'tiquets',
        children: [
          {
            path: '',
            loadChildren: () => import('../tiquets/tiquets.module').then(m => m.TiquetsPageModule)
          }
        ]
      },      
      {
        path: 'calendari',
        children: [
          {
            path: '',
            loadChildren: () => import('../calendari/calendari.module').then(m => m.CalendariPageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/app/tabsbotiga/botiga',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsbotigaPageRoutingModule { }

