import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ClassesRoutingModule } from './classes-routing.module';
import { LayoutComponent } from './layout.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { ViewClassesDetailComponent } from './view-classes-detail/view-classes-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ClassesRoutingModule
  ],
  declarations: [
    LayoutComponent,
    ViewClassesComponent,
    ViewClassesDetailComponent
  ]
})
export class ClassesModule { }
