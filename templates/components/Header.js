import { Linear } from "../../server/linear/Linear.js";

export const Header = () => {
    return Linear.createElement('nav', {class: 'site-header sticky-top py-1'}, [
        Linear.createElement('div', {class: 'container d-flex flex-column flex-md-row justify-content-between'}, [
            Linear.createElement('a', {class: 'py-2', href: '#'}, [
                Linear.createElement('svg', {xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none'}, [
                    Linear.createElement('circle', {cx: 12, cy: 12, r: 10}, null),
                    Linear.createElement('line', {x1: 14.31, y1: 8, x2: 20.05, y2: 17.94}, null),
                    Linear.createElement('line', {x1: 9.69, y1: 8, x2: 21.17, y2: 8}, null),
                    Linear.createElement('line', {x1: 7.38, y1: 12, x2: 13.12, y2: 2.06}, null),
                    Linear.createElement('line', {x1: 9.69, y1: 16, x2: 3.95, y2: 6.06}, null),
                    Linear.createElement('line', {x1: 14.31, y1: 16, x2: 2.83, y2: 16}, null),
                    Linear.createElement('line', {x1: 16.62, y1: 12, x2: 10.88, y2: 21.94}, null),
                ])
            ]),
            Linear.createElement('a', {class: 'py-2', href: '/about'}, 'Tour'),
            Linear.createElement('a', {class: 'py-2', href: '#'}, 'Product'),
            Linear.createElement('a', {class: 'py-2', href: '#'}, 'Features'),
            Linear.createElement('a', {class: 'py-2', href: '#'}, 'Enterprise'),
            Linear.createElement('a', {class: 'py-2', href: '#'}, 'Support'),
            Linear.createElement('a', {class: 'py-2', href: '#'}, 'Pricing'),
            Linear.createElement('a', {class: 'py-2', href: '#'}, 'Cart'),
        ])
    ])
}