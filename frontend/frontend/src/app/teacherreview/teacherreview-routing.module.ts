import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'teacher/:id', component: TeacherInfoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherReviewRoutingModule { }