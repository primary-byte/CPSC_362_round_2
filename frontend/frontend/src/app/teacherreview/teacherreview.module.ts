import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherReviewRoutingModule } from './teacherreview-routing.module';
import { LayoutComponent } from './layout.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TeacherReviewRoutingModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    LayoutComponent,
    TeacherDetailComponent,
    ViewTeacherComponent
  ]
})
export class TeacherReviewModule { }