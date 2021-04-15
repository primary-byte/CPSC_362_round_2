import { Account } from './../../_models/account';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  account: Observable<firebase.User>;
  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.account = this.authService.authAccount();
    this.account.subscribe(account => {
      if (account) {
        this.email = account.email;
      }
    });
  }
}