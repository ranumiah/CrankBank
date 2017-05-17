
import { Component } from '@angular/core';
import { AccountSummary } from '../../shared/account-summary.type';
import { AccountType } from '../../shared/account-type.enum';

@Component({
    selector: 'account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent {

    cashAccounts: AccountSummary[];
    creditAccounts: AccountSummary[];

    constructor() {
        this.cashAccounts = [
            { accountNumber: "123-234-4567", balance: 1234.56, name: "Checking", type: AccountType.Checking },
            { accountNumber: "987-765-4321", balance: 5234.56, name: "Savings", type: AccountType.Savings }
        ];
        this.creditAccounts = [
            { accountNumber: "111-333-5555", balance: 5234.56, name: "Credit", type: AccountType.Credit }
        ];
    }
}
