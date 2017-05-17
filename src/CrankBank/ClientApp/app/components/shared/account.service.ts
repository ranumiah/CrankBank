// The naming convension here is
// using dashes to split the words of the class name and specifying the type of the file

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; // we need this to allow us to use .map()

import { AccountSummary } from './account-summary.type';
import { AccountDetail } from './account-detail.type';

@Injectable()
export class AccountService {
    constructor(private http: Http) {

    }

    getAccountSummaries() {
        return this.http.get('api/Bank/GetAccountSummaries')// This maps to the BankController.cs
            .map(response => response.json() as AccountSummary[]) // this takes the response and project it as type of AccountSummary
            .toPromise(); // This converts our observable to a promise
    }

    getAccountDetail(id: string) {
         return this.http.get(`api/Bank/GetAccountDetail/${id}`)
             .map(response => response.json() as AccountDetail)
             .toPromise();
     }
}
