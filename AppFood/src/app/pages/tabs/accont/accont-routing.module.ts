import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccontPage } from './accont.page';

const routes: Routes = [
  {
    path: '',
    component: AccontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccontPageRoutingModule {}
