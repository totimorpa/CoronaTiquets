import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'signupcomerc',
    loadChildren: () => import('./pages/signupcomerc/signupcomerc.module').then( m => m.SignupcomercPageModule)
  },
  {
    path: 'qui-ets',
    loadChildren: () => import('./pages/qui-ets/qui-ets.module').then( m => m.QuiEtsPageModule)
  },
  {
    path: 'botiga',
    loadChildren: () => import('./pages/botiga/botiga.module').then( m => m.BotigaPageModule)
  },

  {
    path: 'tiquets',
    loadChildren: () => import('./pages/tiquets/tiquets.module').then( m => m.TiquetsPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabsbotiga/tabsbotiga.module').then( m => m.TabsbotigaPageModule)
  },
  {
    path: 'calendari',
    loadChildren: () => import('./pages/calendari/calendari.module').then( m => m.CalendariPageModule)
  },
  {
    path: 'suport',
    loadChildren: () => import('./pages/suport/suport.module').then( m => m.SuportPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
