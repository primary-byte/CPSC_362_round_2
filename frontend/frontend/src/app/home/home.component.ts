import { Component } from '@angular/core';

import { AccountService } from './../_services/account.service';

@Component({ templateUrl: 'home.component.html', styleUrls: ['home.component.css'] })
export class HomeComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}