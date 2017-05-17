
import { Component } from '@angular/core';
import { AccountSummary } from '../../shared/account-summary.type';
import { AccountType } from '../../shared/account-type.enum';
import { AccountService } from '../../shared/account.service';

@Component({
    selector: 'account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent {

    cashAccounts: AccountSummary[];
    creditAccounts: AccountSummary[];

    // Angular understand how to inject our service because in the app.module.ts we specified this providers: [AccountService]
    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
        this.accountService.getAccountSummaries()
            .then(accounts => {
                this.cashAccounts = accounts.filter(v => v.type === AccountType.Checking || v.type === AccountType.Savings);
                this.creditAccounts = accounts.filter(v => v.type === AccountType.Credit);
            });
    }
}
