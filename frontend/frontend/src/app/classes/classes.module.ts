import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class ClassesModule { }
