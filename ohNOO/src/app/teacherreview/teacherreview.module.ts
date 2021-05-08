import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherReviewRoutingModule } from './teacherreview-routing.module';
import { LayoutComponent } from './layout.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherReviewRoutingModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    FilterPipe,
    TeacherInfoComponent
  ]
})
export class TeacherReviewModule { }