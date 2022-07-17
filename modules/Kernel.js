import { Linear } from "./linear/Linear.js";
import { Index } from "../templates/index.js"

class Kernel_class {
    render() {
        Linear.render();
        Linear.replace({ innerHTML: '' }, { place: '.___main___' });
        Index();
    }
}

export const Kernel = new Kernel_class();