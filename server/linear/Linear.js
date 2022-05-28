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

    return(content) {
        return `${content}`;
    }

    config() {
        return LinearDOM.createElement('title', { children: MainConfig.default.pageTitle });
    }

    useEffect(func, arg) { window.addEventListener('load', func) }
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
            LinearDOM.domStructure.querySelectorAll(element.place)[order].addEventListener(eventType, function () {
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

    div(create, place) {
        //console.log('Linear.js: Generate "div" element');
        let div = document.createElement('div');
        if ('id' in create) {
            div.id = create.id;
        }
        if ('class' in create) {
            div.className = create.class;
        }
        if ('style' in create) {
            div.style = create.style;
        }
        if ('text' in create) {
            div.innerText = create.text;
        }
        if ('html' in create) {
            div.innerHTML = create.html;
        }
        if (place !== '') {
            let order = 0;
            if ('order' in place) {
                order = place.order;
            }
            if ('paste' in place) {
                let block = this.domStructure.querySelectorAll(place.place)[order];
                block.insertBefore(div, block.lastChild);
            } else {
                //document.getElementsByClassName(place['class'])[order].appendChild(div);
                //console.log(this.domStructure.querySelectorAll(place.place)[order]);
                this.domStructure.querySelectorAll(place.place)[order].appendChild(div);
            }
        }
    }

    i(create, place) {
        //console.log('Linear.js: Generate "i" element');
        let i_elem = document.createElement('i');
        if ('id' in create) {
            i_elem.id = create.id;
        }
        if ('class' in create) {
            i_elem.className = create.class;
        }
        if (place !== '') {
            if ('place' in place) {
                let order = 0;
                if ('order' in place) {
                    order = place.order;
                }
                LinearDOM.domStructure.querySelectorAll(place.place)[order].appendChild(i_elem);
            }
        }
    }

    input(create, place) {
        //console.log('Linear.js: Generate "input" element');
        let input = document.createElement('input');
        if ('class' in create) {
            input.className = create.class;
        }
        if ('id' in create) {
            input.id = create.id;
        }
        if ('type' in create) {
            input.type = create.type;
        }
        if ('placeholder' in create) {
            input.placeholder = create.placeholder;
        }
        if ('checked' in create) {
            input.defaultChecked = true;
        }
        if (place !== '') {
            if ('place' in place) {
                let order = 0;
                if ('order' in place) {
                    order = place['order'];
                }
                LinearDOM.domStructure.querySelectorAll(place.place)[order].appendChild(input);
            }
        }
    }

    h(size, create, place) {
        //console.log('Linear.js: Generate "h'+size+'" element');
        let h = document.createElement('h' + size);
        if ('class' in create) {
            h.className = create.class;
        }
        if ('id' in create) {
            h.id = create['id'];
        }
        if ('innerText' in create) {
            h.innerText = create.innerText;
        }
        if ('style' in create) {
            h.style.cssText = create.style;
        }
        if (place !== '') {
            if ('place' in place) {
                let order = 0;
                if ('order' in place) {
                    order = place.order;
                }
                this.domStructure.querySelectorAll(place.place)[order].appendChild(h);
            }
        }
    }

    button(create, place) {
        let order = 0;
        if ('order' in place) {
            order = place.order;
        }
        let button = document.createElement('button');
        if ('id' in create) {
            button.id = create.id;
        }
        if ('class' in create) {
            button.className = create.class;
        }
        if ('innerText' in create) {
            button.innerText = create.innerText;
        }

        if ('onclick' in create) {
            button.addEventListener('click', create.onclick);
        }

        if ('place' in place) {
            this.domStructure.querySelectorAll(place.place)[order].appendChild(button);
        }
    }

    label(create, place) {
        let order = 0;
        if ('order' in place) {
            order = place.order;
        }
        let label = document.createElement('label');
        if ('id' in create) {
            label.id = create.id;
        }
        if ('class' in create) {
            label.className = create.class;
        }

        if ('place' in place) {
            LinearDOM.domStructure.querySelectorAll(place.place)[order].appendChild(label);
        }
    }

    span(create, place) {
        let order = 0;
        if ('order' in place) {
            order = place.order;
        }
        let span = document.createElement('span');
        if ('id' in create) {
            span.id = create.id;
        }
        if ('class' in create) {
            span.className = create.class;
        }

        if ('place' in place) {
            LinearDOM.domStructure.querySelectorAll(place.place)[order].appendChild(span);
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

    createElement(name, data, func) {
        if (name === 'div') {
            this.div(data);
        }

        if (name === 'title') {
            let title = document.createElement('title');
            let header = document.getElementsByTagName('head')[0];
            title.innerHTML = data.children;
            header.appendChild(title)
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