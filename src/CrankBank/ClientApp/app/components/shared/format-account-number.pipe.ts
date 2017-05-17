// The naming convension here is
// using dashes to split the words of the class name and specifying the type of the file

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatAccountNumber'
})
export class FormatAccountNumberPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return "";

        return "..." + (value.length > 4 ? value.substring(value.length - 4) : value);
    }
}
