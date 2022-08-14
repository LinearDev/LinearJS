import { Kernel } from "../Kernel.js";
import { Linear } from "../linear/Linear.js";

class Router_class {
    render() {
        Kernel.render();
        window.addEventListener('popstate', Kernel.render);
    }

    to(link) {
        history.pushState('', 'link', link);
        this.render();
    }

    container(routerStructure) {
        for (const route of routerStructure) {
            if (window.location.pathname === route.uri) {
                Linear.setDOM(route.constructor());
            }
        }
    }
}

export const Router = new Router_class();