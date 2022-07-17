# This an WASM module for Linear.js
We setted up an easy workflow, minimized all work with WebAssembly in web you just need use module functions where you want.

**Right now you can wright you own modules on Golang but in future we connect all suported programming languages.**

## What I must to do for deleting this module?
1. Remove from /public/index.html script what connects WASM module for GO
(6:8 < script type="module" src="/modules/wasm/wasm_exec.js" > < /script >)
2. In Controller.js remove or comment imports and initializations of WASM module
(import { WASM } from './wasm/index.js'; and Logger.do('WASM: Start work', WASM.init, true);)
3. In module_config.js set active to false state
(active: false)