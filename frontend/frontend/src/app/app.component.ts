import { Account } from './_models/account';
import { Component } from '@angular/core';

import { AccountService } from './_services/account.service';
import { Role } from './_models/role';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
    Role = Role;
    account: Account;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);

        
    }

    logout() {
        this.accountService.logout();
    }
}