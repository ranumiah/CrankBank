// The naming convension here is
// using dashes to split the words of the class name and specifying the type of the file

import { AccountType } from './account-type.enum';

export class AccountSummary {
    accountNumber: string;
    type: AccountType;
    name: string;
    balance: number;
}