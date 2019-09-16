import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { P2PComponent } from './P2P/p2p.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'p2p',
        pathMatch: 'full'

      },
      {
        path: 'p2p',
        component: P2PComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  P2PComponent,
  HistoryComponent
]
