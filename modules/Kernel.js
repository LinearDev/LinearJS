import { Linear } from "./linear/Linear.js";
import { Index } from "../templates/index.js";
import  { Error404 } from "../templates/404.js";

class Kernel_class {
    checkPage() {
        let content = Index();
        console.log(content);
        if (content.toLocaleString().includes("HTML")) {
            if (window.location.pathname === "/") {
                return Linear.setDOM(Index());
            }
        } else {
            for (let routeObj of content) {
                if (routeObj.uri == window.location.pathname) {
                    return Index();
                }
            }
        }

        Error404();
    }

    render() {
        Linear.render();
        Linear.replace({ innerHTML: '' }, { place: '.___main___' });
        this.checkPage();
    }
}

export const Kernel = new Kernel_class();