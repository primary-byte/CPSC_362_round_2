import { Account } from './../../_models/account';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private Account: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
    this.Account = afAuth.authState;
  }

  authAccount() {
    return this.Account;
  }

  get currentAccountId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  setAccountData(email: string, displayName: string, status: string): void {
    const path = `Accounts/${this.currentAccountId}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  setAccountStatus(status: string): void {
    const path = `Accounts/${this.currentAccountId}`;

    const data = {
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }
}