import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerchPageRoutingModule } from './serch-routing.module';

import { SerchPage } from './serch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerchPageRoutingModule
  ],
  declarations: [SerchPage]
})
export class SerchPageModule {}
