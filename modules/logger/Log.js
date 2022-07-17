class Logger_class {
    async do(mess, func, onerror) {
        if (func == '') {
            return console.warn(mess);
        }

        let prom = new Promise(() => {
            func();
        });

        if (onerror === true) {
            prom.catch(console.error());
        }

        prom.then(console.warn(mess));
    }
}

export const Logger = new Logger_class();