import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherReviewRoutingModule } from './teacherreview-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherReviewRoutingModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class TeacherReviewModule { }