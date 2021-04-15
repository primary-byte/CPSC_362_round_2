import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { ClassesRoutingModule } from './classes-routing.module';
import { LayoutComponent } from './layout.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ClassesRoutingModule,
    MatDialogModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    LayoutComponent,
    ViewCoursesComponent
  ]
})
export class ClassesModule { }
