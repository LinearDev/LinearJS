import { Linear } from "../../modules/linear/Linear.js";
import { Router } from "../../modules/router/Router.js";

export const Header = () => {
    return Linear.createElement('nav', {class: 'navbar navbar-expand-lg'}, [
        Linear.createElement('div', {class: 'container-fluid'}, [
            Linear.createElement('a', {class: 'navbar-brand', href: '/'}, 
                Linear.createElement('img', {src: 'public/img/logo_text.png', alt: 'LinearDev'}, null)
            ),
            Linear.createElement('button', {class: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': "#navbarNavAltMarkup", 'aria-controls': "navbarNavAltMarkup", 'aria-expanded': "false", 'aria-label': "Toggle navigation"}, 
                Linear.createElement('span', {class: 'navbar-toggler-icon'}, null)
            ),
            Linear.createElement('div', {class: 'collapse navbar-collapse', id: 'navbarNavAltMarkup'}, 
                Linear.createElement('div', {class: 'navbar-nav'}, [
                    Linear.createElement('a', {class: 'nav-custom-link nav-link', action: {type: 'click', listener: () => {Router.to('/')}}}, 'Home'),
                    Linear.createElement('a', {class: 'nav-custom-link nav-link', action: {type: 'click', listener: () => {Router.to('/docs')}}}, 'Docs'),
                    Linear.createElement('a', {class: 'nav-custom-link nav-link', href: 'http://lineardev.net/', target: "_blank"}, 'LinearDev'),
                ])
            )
        ])
    ])
}