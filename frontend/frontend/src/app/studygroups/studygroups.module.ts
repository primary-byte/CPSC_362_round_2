import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyGroupsRoutingModule } from './studygroups-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    StudyGroupsRoutingModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class StudyGroupsModule { }