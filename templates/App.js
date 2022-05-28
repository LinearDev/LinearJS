import { Linear } from "../server/linear/Linear.js";

export const App = () => {
    Linear.div({ class: 'GoOnDick' }, { place: '.___main___' });
    Linear.h(1, { class: 'title', style: 'text-align: center', innerText: 'LinearDev' }, { place: '.GoOnDick' })
}