
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsMultiSelectComponent } from './chips-multi-select/chips-multi-select.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule,
        MatChipsModule,

    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        UpdateComponent,
        ChipsMultiSelectComponent
        //ShowPostsComponent
    ],
    entryComponents: [ChipsMultiSelectComponent]
})
export class ProfileModule { }