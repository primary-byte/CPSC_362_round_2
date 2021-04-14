import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ClassesRoutingModule } from './classes-routing.module';

import { LayoutComponent } from './layout.component';

import { ClassListModule } from './classlist/classList.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ClassesRoutingModule,
    MatCardModule,
    ClassListModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class ClassesModule { 

  constructor(router: Router){
  }
}
