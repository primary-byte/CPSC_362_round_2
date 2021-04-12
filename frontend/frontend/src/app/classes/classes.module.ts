
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ClassesRoutingModule } from './classes-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MatCardModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class ClassesModule { }
