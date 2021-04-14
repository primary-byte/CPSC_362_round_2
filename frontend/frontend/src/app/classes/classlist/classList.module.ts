import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewClassesComponent } from './view-classes/view-classes.component';
import { ViewClassDetailComponent } from './view-class-detail/view-class-detail.component';

import { ClassListRoutingModule } from './classList-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClassListRoutingModule
  ],
  declarations: [
    ViewClassesComponent,
    ViewClassDetailComponent
  ]
})
export class ClassListModule {}