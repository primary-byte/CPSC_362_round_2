import { Account } from './../../_models/account';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  accounts: Account[];

  constructor(chat: ChatService) {
    chat.getUsers().valueChanges().subscribe(accounts => {
      this.accounts = accounts;
    });
  }
}