import { Linear } from "../../server/linear/Linear.js";

export const AllPageBlock = () => {
    return Linear.createElement('div', {class: 'position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light'}, [
        Linear.createElement('div', {class: 'col-md-5 p-lg-5 mx-auto my-5'}, [
            Linear.createElement('h1', {class: 'display-4 font-weight-normal'}, 'Punni headline'),
            Linear.createElement('p', {class: 'lead font-weight-normal'}, "And an even wittier subheading to boot. Jumpstart your marketing efforts\n" +
                "            with this example based on Apple's marketing pages."),
            Linear.createElement('a', {class: 'btn btn-outline-secondary', href: '#'}, 'Coming soon')
        ]),
        Linear.createElement('div', {class: 'product-device box-shadow d-none d-md-block'}, null),
        Linear.createElement('div', {class: 'product-device product-device-2 box-shadow d-none d-md-block'}, null)
    ])
}