import { Linear } from "../../server/linear/Linear.js";

export const Footer = () => {
    return Linear.createElement('footer', {class: 'container py-5'}, [
        Linear.createElement('div', {class: 'row'}, [
            Linear.createElement('div', {class: 'col-12 col-md'} ,[
                Linear.createElement('svg', {
                    xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
                    stroke: "currentColor", 'stroke-width': "2", 'stroke-linecap': "round", 'stroke-linejoin': "round",
                    class: "d-block mb-2"
                }, [
                    Linear.createElement('circle', {cx: 12, cy: 12, r: 10}),
                    Linear.createElement('line', {x1: 14.31, y1:8, x2: 20.05, y2: 17.94}, null),
                    Linear.createElement('line', {x1: 9.69, y1:8, x2: 21.17, y2: 8}, null),
                    Linear.createElement('line', {x1: 7.38, y1:12, x2: 13.12, y2: 2.06}, null),
                    Linear.createElement('line', {x1: 9.69, y1:16, x2: 3.95, y2: 6.06}, null),
                    Linear.createElement('line', {x1: 14.31, y1:16, x2: 2.83, y2: 16}, null),
                    Linear.createElement('line', {x1: 16.62, y1:12, x2: 10.88, y2: 21.94}, null),
                ]),
                Linear.createElement('small', {class: 'd-block mb-3 text-muted'}, 'LinearJS© 2017-2018')
            ]),
            Linear.createElement('div', {class: 'col-6 col-md'} ,[
                Linear.createElement('h5', null, 'Features'),
                Linear.createElement('ul', {class: 'list-unstyled text-small'}, [
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Coll staff')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Random feature')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Team feature')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Staff for developers')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Another one')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Last time'))
                ]),
            ]),
            Linear.createElement('div', {class: 'col-6 col-md'} ,[
                Linear.createElement('h5', null, 'Resourses'),
                Linear.createElement('ul', {class: 'list-unstyled text-small'}, [
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Resource')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Resource name')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Another resourse')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Final resourse'))
                ]),
            ]),
            Linear.createElement('div', {class: 'col-6 col-md'} ,[
                Linear.createElement('h5', null, 'Resourses'),
                Linear.createElement('ul', {class: 'list-unstyled text-small'}, [
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Business')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Education')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Government')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Gaming'))
                ]),
            ]),
            Linear.createElement('div', {class: 'col-6 col-md'} ,[
                Linear.createElement('h5', null, 'About'),
                Linear.createElement('ul', {class: 'list-unstyled text-small'}, [
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Team')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Locations')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Privacy')),
                    Linear.createElement('li', null, Linear.createElement('a', {class: 'text-muted', href: '#'}, 'Terms'))
                ]),
            ])
        ])
    ])
}