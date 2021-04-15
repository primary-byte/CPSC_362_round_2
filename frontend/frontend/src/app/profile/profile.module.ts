import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
//import { ShowPostsComponent } from './../show-posts/show-posts.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { UpdateComponent } from './update.component';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        MatCardModule,
        MatIconModule
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        UpdateComponent,
        //ShowPostsComponent
    ]
})
export class ProfileModule { }