import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

switch (window.location.port) {   
    case '4200':
        // Local Developement code block
        environment.apiUrl = 'http://localhost:8080/';
        environment.environmentName = 'Local Developement';
        // alert(environment.environmentName);
        break;
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
