
**Initial Steps**
* dotnet new -l
* dotnet new angular
* dotnet restore
* npm install
* start *.csproj
* Build & Run
* Save Solution file

**Generate Webpack files When ClientApp\dist is missing**
* webpack --config .\webpack.config.vendor.js
* webpack --config .\webpack.config.js

# wwwroot

This is the actual base of delivered web application, and so in here this is where we place assets associated with images, and so on and so forth.

# Dependency Injection System

Dependency Injector says that an external container is gonna be the responsible for the life cycle of the component that can be injected. And it will look at components to see if they require an instance of that external dependency when they're constructed.

# Binding

* Interpolation (evaluates expressions) -
    * \<h3\>{{ account.name }}\<h3\>    : John
    * \<h3\>{{ 4 + 4 }}\<h3\>           : 8
* Null Guard (protects against undefined object) - {{ account?.name }}
* Input Binding (assign value to property) - [property]="account"
* Output binding (execute a function) - (click)="navigateToDetails()"
* Two-way binding - [(property)]="account"