import { Linear } from "./linear/Linear.js";
import { Router } from "./router/Router.js";
//import { App } from '../templates/App.js';

class PageController_class {

    start(uri) {
        if (window.location.pathname === '/') {
            console.log('App')
        } else {
            Router.render();
        }
    }
}

export const PageController = new PageController_class();