import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { ClassesRoutingModule } from './classes-routing.module';
import { LayoutComponent } from './layout.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { ClassInfoComponent } from './class-info/class-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ClassesRoutingModule,
    MatDialogModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    SearchPipe,
    ClassInfoComponent
  ]
})
export class ClassesModule { }
