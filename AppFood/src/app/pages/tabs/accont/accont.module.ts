import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccontPageRoutingModule } from './accont-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccontPage } from './accont.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccontPageRoutingModule,
    ComponentsModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AccontPage]
})
export class AccontPageModule {}
