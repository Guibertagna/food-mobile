import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[{
      path: 'accont',
      loadChildren: () => import('../../pages/tabs/accont/accont.module').then( m => m.AccontPageModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('../tabs/cart/cart.module').then( m => m.CartPageModule)
    },
    {
      path: 'serch',
      loadChildren: () => import('../tabs/serch/serch.module').then( m => m.SerchPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('../tabs/home/home.module').then( m => m.HomePageModule)
    },
    {
      path: '',
      redirectTo: 'tabs/home',
      pathMatch: 'full'
    },
  
  ]
  },
  {
    path: 'restaurants/:restaurantId',
    loadChildren: () => import('./itens/itens.module').then( m => m.ItensPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
