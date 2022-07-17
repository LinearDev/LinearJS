"use strict"
import { LinearDOM } from './LinearDom.js';
import * as MainConfig from '../../config/config.js';

class Linear_class {

    domStructure;

    render() {
        this.domStructure = document.querySelector('.root');
        //console.log(this.domStructure)
        //var pageStr = page;
        //console.log(pageStr);
    }

    renderJsx() {
        console.log(this)
    }

    return(content) {
        return `${content}`;
    }

    config() {
        return LinearDOM.createElement('title', { children: MainConfig.default.pageTitle });
    }

    setDOM(component) {
        const main = this.domStructure.querySelector('.___main___');
        if (String(component.outerHTML)[0] === '<') {
            main.innerHTML = component.outerHTML;
            console.log(component)
        } else if (typeof component === "object") {
            for (let key in component) {
                if (String(component[key].outerHTML)[0] === '<') {
                    main.appendChild(component[key]);
                } else if (typeof component[key] === "object") {
                    const comp = component[key];
                    const freeDiv = document.createElement('div');
                    for (let key in comp) {
                        freeDiv.appendChild(comp[key]);
                    }
                    main.appendChild(freeDiv);
                    console.log(comp)
                }
            }
        }
    }

    useEffect(func, arg) {window.addEventListener('load', func)}
}

class LinearDOM_class extends Linear_class {
    paste(place, data) {
        //console.log('Linear.js: Pasting element');
        if ('id' in place) {
            let elem = document.getElementById(place.id);
        }

        this.div();
    }

    click(element, eventType, event) {
        //console.log('Linear.js: Click event');
        let order = 0;
        if ('order' in element) {
            order = element.order;
        }
        if ('place' in element) {
            this.domStructure.querySelectorAll(element.place)[order].addEventListener(eventType, function () {
                if (Array.isArray(event.event)) {
                    let e = event.event[0];
                    if (event.id === undefined) {
                        e({ event: event.event[1] });
                    } else {
                        e({ event: event.event[1], id: event.id });
                    }
                }
            })
        }
    }

    get(element) {
        //console.log('Linear.js: Getting element');
        if ('place' in element) {
            let order = 0;
            if ('order' in element) {
                order = element.order;
            }
            return this.domStructure.querySelectorAll(element.place)[order];
        }
    }

    replace(create, place) {
        let order = 0;
        if ('order' in place) {
            order = place.order
        }
        let elem = this.domStructure.querySelectorAll(place.place)[order];
        if ('innerHTML' in create) {
            elem.innerHTML = create.innerHTML;
        }
    }

    overflow(place) {
        //console.log('Linear.js: Generate "Overflow"');
        if (place !== '') {
            let box = document.createElement('div');
            box.id = 'overflow_cont_box';
            box.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
            if ('place' in place) {
                LinearDOM.domStructure.querySelectorAll(place.place)[0].appendChild(box);
            }
        }
    }

    createElement(name, props, children) {
        if (name !== '' && name !== null && name !== undefined) {
            const elem = document.createElement(name);
            if (props !== null) {
                if ('innerHTML' in props) {
                    console.log("Linear.js: Error props can't contain innerHTML");
                    return;
                } else if ('innerText' in props) {
                    console.log("Linear.js: Error props can't contain innerText");
                    return;
                } else {
                    if ('action' in props) {
                        elem.addEventListener(props.action.type, props.action.listener);
                        delete props.action;
                    }
                    for (let key in props) {
                        elem.setAttribute(key, props[key])
                    }
                }
            }

            if (children !== null) {
                if (typeof children === "string") {
                    elem.innerText = children;
                } else if (typeof children === "object") {
                    if (String(children.outerHTML)[0] === '<') {
                        elem.appendChild(children);
                    } else {
                        for (let key in children) {
                            elem.appendChild(children[key])
                        }
                    }
                }
            }
            return elem;
        }
    }

    link(type, src) {
        if (type === 'css') {
            let head = document.getElementsByTagName('head')[0];
            let css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = src;
            head.appendChild(css);
        }
    }
}

export var Linear = new LinearDOM_class();