import { Linear } from '../modules/linear/Linear.js';
import { Router } from '../modules/router/Router.js';
import { App } from "./App.js";
import { Docs } from "./Docs.js";

export const Index = () => {

    const structureFunc = [{
        uri: '/',
        constructor: () => {
            Linear.setDOM(App());
        }
    }, {
        uri: '/docs',
        constructor: () => {
            Linear.setDOM(Docs())
        }
    }]
    Router.container(structureFunc);
}
