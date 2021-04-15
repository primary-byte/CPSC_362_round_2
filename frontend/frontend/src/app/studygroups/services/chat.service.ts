
import { Injectable } from '@angular/core';
import { QueryFn } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { ChatMessage } from './../../_models/chat-message.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  account: any;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { 
    // this.afAuth.authState.subscribe(auth => {
    //   if(auth !== undefined && auth !== null) {
    //     this.account = auth;
    //   }
    // });
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
  //  const email = this.account.email;
    const email = 'test@example.com';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
  //    userName: this.userName,
      userName: "test-user",
      email: email
    });
  }

  getMessages(): AngularFireList<ChatMessage> {
    return this.db.list('/messages', ref => {
        return ref.limitToLast(25).orderByKey()
    });
  }

  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (now);
  }
}
