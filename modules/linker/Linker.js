import config from './config.js';
import modules from '../module_config.js';

class Linker_class {
    config;

    constructor(config) {
        this.config = config;
    }

    css() {
        const head = document.getElementsByTagName('head')[0];
        const body = document.getElementsByTagName('body')[0];
        for (let key of config.keys()) {
            let value = config.get(key);
            if (key === 'css') {
                for (let link of value) {
                    let css = document.createElement('link');
                    css.rel = 'stylesheet';
                    css.href = link;
                    head.appendChild(css);
                }
            }
        }
    }

    configModules() {
        const body = document.getElementsByTagName('body')[0];
        for (let module of modules) {
            if (!module.active) {
                return;
            }

            const js = document.createElement('script');
            js.type = module.type;
            js.src = module.path;
            body.appendChild(js);
        }
    }
}

export var Linker = new Linker_class(config);