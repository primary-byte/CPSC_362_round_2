import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { QuestionsRoutingModule } from './questions-routing.module';
import { LayoutComponent } from './layout.component';
import { ModalComponent } from './modal/modal.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,

    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LayoutComponent,
    ModalComponent,
    QuestionFormComponent
  ]
})
export class QuestionsModule { }