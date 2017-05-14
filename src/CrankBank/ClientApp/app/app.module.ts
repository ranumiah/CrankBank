/*
This is the main configuration for our application module
The imports bring in the components that we're leveraging in this app
*/

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';

// The NG module decorator, which is a specific type of function that allows us to attach metadata to our app module
@NgModule({
    bootstrap: [ AppComponent ], // This tells us that we're gonna be launching our app component as our Startup Component
    declarations: [ // This is a list of the components that we're gonna reference inside our module
        AppComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([ // Path Configuration that set up the Angular Routing
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
