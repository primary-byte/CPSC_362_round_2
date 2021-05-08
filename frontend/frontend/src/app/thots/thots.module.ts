
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThotsRoutingModule } from './thots-routing.module';
import { LayoutComponent } from './layout.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    ThotsRoutingModule,
    MatCardModule,
  ],
  declarations: [
    LayoutComponent,
    BlogComponent,
  ]
})
export class ThotsModule { }
