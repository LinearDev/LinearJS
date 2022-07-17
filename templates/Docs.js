import { Linear } from "../modules/linear/Linear.js";
import { Layout } from "./components/Layout.js";

export const Docs = () => {
    return Layout({children: Linear.createElement('div', {class: 'content-box'}, [
            Linear.createElement('h1', {style: 'text-align: center'}, 'Here goes documentation of Linear.js'),
            Linear.createElement('h2', {style: 'text-align: center'}, 'Unfortunately all documentation in README.md files'),
        ])
    });
}