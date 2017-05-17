
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountSummary } from '../../shared/account-summary.type';

@Component({
    selector: 'account-summary',
    templateUrl: './account-summary.component.html',
    styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {
    @Input() accountSummary: AccountSummary
    // This is short hand for doing the following steps:
    // private router: Router;  we are declaring a variable
    // this.router = router; we are assigning the variable
    constructor(private router: Router) {
    }

    navigateToDetail() {
        // The router component is actually a core part of the system, which we import and inject it in
        this.router.navigate(["detail", this.accountSummary.accountNumber])
    }
}
    