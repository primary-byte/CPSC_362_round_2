import { ChatroomComponent } from './chatroom/chatroom.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'chatroom', component: ChatroomComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudyGroupsRoutingModule { }