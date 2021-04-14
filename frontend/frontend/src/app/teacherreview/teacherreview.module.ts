import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherReviewRoutingModule } from './teacherreview-routing.module';
import { LayoutComponent } from './layout.component';
import { ViewTeachersComponent } from './view-teachers/view-teachers.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherReviewRoutingModule,
    MatCardModule
  ],
  declarations: [
    LayoutComponent,
    ViewTeachersComponent,
    TeacherDetailComponent
  ]
})
export class TeacherReviewModule { }