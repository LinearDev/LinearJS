import { Linear } from "../modules/linear/Linear.js";
import { Layout } from "./components/Layout.js";

export const App = () => {
    return Layout({children: Linear.createElement('div', {class: 'content-box'}, [
            Linear.createElement('h1', {style: 'text-align: center'}, 'Are you happy?'),
            Linear.createElement('h2', {style: 'text-align: center'}, "It's your own Linear.js based website")
        ])
    });
}