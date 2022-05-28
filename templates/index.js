import { Linear } from '../server/linear/Linear.js';
import { Router } from '../server/router/Router.js';
import { App } from "./App.js";

export const Index = () => {

    const structureFunc = [{
        uri: '/',
        constructor: () => {
            App();
        }
    }]
    Router.container(structureFunc);
}
