console.warn('Controller.js: Start working');
console.warn('Controller.js: Importing scripts');

import { Linear } from './linear/Linear.js';
import { Linker } from './linker/Linker.js';
import { Logger } from './logger/Log.js';
import { Router } from "./router/Router.js";
import { WASM } from './wasm/index.js';

Logger.do('Linear.js: Add title to page', Linear.config, true);
Logger.do('Linker.js: Imported CSS', Linker.css, true);
Logger.do('Linker.js: Import JS modules srcipts', Linker.configModules, true);
Logger.do('Router.js: Starting to render pages', Router.render, true);
Logger.do('WASM: Start work', WASM.init, true);

//Router.render();