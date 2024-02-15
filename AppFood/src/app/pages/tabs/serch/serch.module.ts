import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerchPageRoutingModule } from './serch-routing.module';

import { SerchPage } from './serch.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SerchPage]
})
export class SerchPageModule {}
