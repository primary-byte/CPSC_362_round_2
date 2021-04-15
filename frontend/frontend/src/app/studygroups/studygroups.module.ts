
import { environment } from './../../environments/environment';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StudyGroupsRoutingModule } from './studygroups-routing.module';
import { LayoutComponent } from './layout.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';

import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';


@NgModule({
  imports: [
    CommonModule,
    StudyGroupsRoutingModule,
    MatCardModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    LayoutComponent,
    ChatroomComponent,
    ChatFormComponent,
    UserListComponent,
    UserItemComponent,
    FeedComponent,
    MessageComponent
  ],
  providers: [ChatService, AuthService],
})
export class StudyGroupsModule { }