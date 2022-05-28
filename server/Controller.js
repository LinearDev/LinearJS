console.warn('Controller.js: Start working');
console.warn('Controller.js: Importing scripts');

import { Linear } from './linear/Linear.js';
import { Linker } from './linker/Linker.js';
import { Logger } from './logger/Log.js';
import { Router } from "./router/Router.js";

Logger.do('Linear.js: Add title to page', Linear.config, true);
Logger.do('Linker.js: Imported CSS and JS', Linker.linkAll, true);
Logger.do('Router.js: Starting to render pages', Router.render, true);
//Router.render();

//const root = document.getElementById('root');
//Linear.render(PageController.renderAllPages(), root);

/*let openRequest = indexedDB.open("chats", 1);

// создаём хранилище объектов для books, если ешё не существует
openRequest.onupgradeneeded = function() {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('0')) { // если хранилище "books" не существует
        db.createObjectStore('0', {keyPath: 'id', autoIncrement: true}); // создаем хранилище
    }
};*/

//console.log('Kernel.js: Start to loading page');
//Kernel.pageGenerator('leftBox');
//PageController.messageGenerator('2');

/*class Controller_class {
    click(type, elem, event) {
        if (type === 'class') {
            document.getElementsByClassName(elem)[0].addEventListener('click', function (){
                if (Array.isArray(event)) {
                    let e = event[0];
                    e(event[1]);
                }
            })
        }
    }
}*/
//export var Controller = new Controller_class();


/*Router.checkPopState();
if (window.location.pathname !== '/') {
    let path = window.location.pathname;
    if (path.split('/').indexOf('messages')){
        let pageId = path.split('/')[2];
        Router.to({id: pageId});
    }
}*/