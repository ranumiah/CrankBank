
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'account-summary',
    templateUrl: './account-summary.component.html',
    styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {
    // This is short hand for doing the following steps:
    // private router: Router;  we are declaring a variable
    // this.router = router; we are assigning the variable
    constructor(private router: Router) {
    }

    navigateToDetail() {
        // The router component is actually a core part of the system, which we import and inject it in
        this.router.navigate(["detail", "1234"])
    }
}
    