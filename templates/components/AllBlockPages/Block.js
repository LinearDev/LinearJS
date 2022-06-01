import { Linear } from "../../../server/linear/Linear.js";

export const Block = ( props ) => {
    return Linear.createElement('div', {class: 'd-md-flex flex-md-equal w-100 my-md-3 pl-md-3'}, [
        Linear.createElement('div', {class: 'bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'}, [
            Linear.createElement('div', {class: 'my-3 py-3'}, [
                Linear.createElement('h2', {class: 'display-5'}, props.title),
                Linear.createElement('p', {class: 'lead'}, props.subtext)
            ]),
            Linear.createElement('div', {class: 'bg-light box-shadow mx-auto', style: "width: 80%; height: 300px; border-radius: 21px 21px 0 0;"}, null)
        ]),
        Linear.createElement('div', {class: 'bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden',}, [
            Linear.createElement('div', {class: 'my-3 p-3'}, [
                Linear.createElement('h2', {class: 'display-5'}, props.title),
                Linear.createElement('p', {class: 'lead'}, props.subtext)
            ]),
            Linear.createElement('div', {class: 'bg-dark box-shadow mx-auto', style: "width: 80%; height: 300px; border-radius: 21px 21px 0 0;"}, null)
        ])
    ])
}