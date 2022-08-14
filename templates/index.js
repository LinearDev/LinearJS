import { Linear } from '../modules/linear/Linear.js';
import { Router } from '../modules/router/Router.js';
import { App } from "./App.js";
import { Docs } from "./Docs.js";
import { Test } from "./Test.js";

export const Index = () => {
    const structureFunc = [{
        uri: '/',
        constructor: () => {
            return App();
        }
    }, {
        uri: '/docs',
        constructor: () => {
            return Docs();
        }
    }, {
        uri: '/tests',
        constructor: () => {
            return Test();
        }
    }]
    Router.container(structureFunc);
    return structureFunc;
}
