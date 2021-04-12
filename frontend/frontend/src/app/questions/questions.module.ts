import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatCardModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class QuestionsModule { }