// The naming convension here is
// using dashes to split the words of the class name and specifying the type of the file

import { AccountSummary } from './account-summary.type';
import { AccountTransaction } from './account-transaction.type';

export class AccountDetail {
    accountSummary: AccountSummary;
    accountTransactions: AccountTransaction[];
}