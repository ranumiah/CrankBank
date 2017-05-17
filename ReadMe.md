
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