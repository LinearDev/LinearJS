import { Linear } from '../server/linear/Linear.js';
import { Router } from '../server/router/Router.js';
import {App} from "./App.js";
import {About} from "./About.js";

export const Index = () => {

    const structureFunc = [{
        uri: '/',
        constructor: () => {
            Linear.setDOM(App());
        }
    }, {
        uri: '/about',
        constructor: () => {
            Linear.setDOM(About())
        }
    }]
    Router.container(structureFunc);
}
