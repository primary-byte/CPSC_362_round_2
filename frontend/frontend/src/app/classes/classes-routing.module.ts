import { COURSES } from 'src/app/questions/mock-course-list';

import { ClassInfoComponent } from './class-info/class-info.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'classes/:{{class}}', component: ClassInfoComponent, data: COURSES}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassesRoutingModule { }