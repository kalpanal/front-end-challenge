import { Injectable } from '@angular/core';
@Injectable()
export class Common {
    sessionExpireTime = 900;
    sessionIdleTime = 5;
    localDevelopementMode = 'Local Developement';
    developementMode = 'Developement';
    demoMode = 'Demo';
    enableRightClick = false;

    // *** Standardisation of success/error messages *** //
    // *** global messages *** //
    globalErrorMsg = 'Something went wrong';
   
    windowscroll() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    chartwindowscroll() {
        window.scroll({ top: 395, left: 0, behavior: 'smooth' });
    }

    // *** Sleep function for success/error messages *** //
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    destroyform() {
        sessionStorage.removeItem('form');
    }

}
