import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewClassesComponent } from './view-classes/view-classes.component';
import { ViewClassDetailComponent } from './view-class-detail/view-class-detail.component';

const classListRoutes: Routes = [
  { path: 'classList', redirectTo: '/courses' },
  { path: 'classes/:id', redirectTo: '/course/:id' },
  { path: 'courses',  component: ViewClassesComponent, data: { animation: 'classList' } },
  { path: 'course/:id', component: ViewClassDetailComponent, data: { animation: 'classes' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(classListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClassListRoutingModule { }