import { Component } from '@angular/core';

// To leverage this component it must be registered in the app.module.ts
@Component({
    selector: 'shared-header',  // This is the element that I'll refer to in my HTML when I use this.
    templateUrl: './header.component.html'

})

export class HeaderComponent {
}