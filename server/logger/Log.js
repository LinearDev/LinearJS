class Logger_class {
    do(mess, func, onerror) {
        if (func !== '') {
            let prom = new Promise(() => {
                func()
            });

            if (onerror === true) {
                prom.catch(console.error());
            }

            prom.then(console.warn(mess));
        } else {
            console.warn(mess)
        }
    }
}

export var Logger = new Logger_class();