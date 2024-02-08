import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerchPage } from './serch.page';

const routes: Routes = [
  {
    path: '',
    component: SerchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerchPageRoutingModule {}
