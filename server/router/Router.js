import { Kernel } from "../Kernel.js";

class Router_class {

    render() {
        Kernel.render()
        window.addEventListener('popstate', Kernel.render)
    }

    to(link) {
        history.pushState('', 'link', link);
        Kernel.render()
    }

    container(routerStructure) {
        for (const route of routerStructure) {
            if (window.location.pathname === route.uri) {
                route.constructor()
            }
        }
    }
}

export const Router = new Router_class();