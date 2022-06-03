import { Linear } from '../server/linear/Linear.js';
import { Router } from '../server/router/Router.js';
//import {App} from "./App.js";
import { Test } from "./Test.js";
import { About } from "./About.js";

export const Index = () => {

    const structureFunc = [{
        uri: '/',
        constructor: () => {
            Linear.setDOM(Test());
        }
    }, {
        uri: '/about',
        constructor: () => {
            Linear.setDOM(About())
        }
    }]
    Router.container(structureFunc);
}
