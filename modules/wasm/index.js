class WebAssembly_class {
    init() {
        if (WebAssembly) {
            const go = new Go();
            WebAssembly.instantiateStreaming(fetch("/modules/wasm/main.wasm"), go.importObject).then((result) => {
                go.run(result.instance);
            });
        } else {
            console.log("WebAssembly is not supported in your browser")
        }
    }
}

/*
if (WebAssembly) {
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch("/modules/wasm/main.wasm"), go.importObject).then((result) => {
        go.run(result.instance);
    });
} else {
    console.log("WebAssembly is not supported in your browser")
}
*/

export const WASM = new WebAssembly_class();