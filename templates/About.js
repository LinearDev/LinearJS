import {Linear} from "../server/linear/Linear.js";
import {Router} from "../server/router/Router.js";

export const About = () => {
    return [
        Linear.createElement('h1', null, 'About Page'),
        Linear.createElement('button', {action: {type: 'click', listener: () => {Router.to('/')}}}, 'home')
    ]
}