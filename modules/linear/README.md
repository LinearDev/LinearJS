# Linear
Module that halps you dynamically build DOM from js in tamplates.

Big DOCS comming soon...

## Small Documantation for Linear

**Linear Componets**
------
If you've been writing React apps before, then you learned how to write component based pages and how to reuse them.
So what do simple components look like?

    //First goes import//
    import { Linear } from "../modules/linear/Linear.js"

    //Then the functional component. IMPORTANT: Don't forget to export it //
    export const Index = () => {
        return App({props})
    }

Let me give you a some explanation about this code.
What the hell does this "props" do? props [object | null] - in this parameter you can transmit strings, functions etc. to your component and use it there. Let's see how it works with an example.

**[File index.js]**

    //Took code from previous example
    import { Linear } from "../modules/linear/Linear.js"

    export const Index = () => {
        return App({text: "Some text", date: "1998-01-01"});
    }

**[File App.js]**

    import { Linear } from "../modules/linear/Linear.js"

    export const App = ( props ) => {
        return Linear.createElement('div', null, [
            Linear.createElement('h1', {class: 'hading'}, props.text),
            Linear.createElement('p', null, props.date)
        ]);
    }

As you can see, it's very simple.

**Linear.createElement(name, props, func)**
------
    name [string] - HTML element tag name (div, p, h1, etc.)
    props [object | null] - attributes of HTML element (class, id, src, etc.)
    func [string | function | array | null] - returns one or more children HTML elements. If its string - returns text  
        in children element. If array - returns list of HTML element.

**Example of using Linear.createElement()**
---
Creating paragraph element

    Linear.createElement('p', {class: 'paragraph'}, 'some simple text');

Create div element with children element

    Linear.createElement('div', null,
        Linear.createElement('h1', {'custom-atr': 'some data in  atr'}, 'Its a heading')
    );

    //Look closely: children attribute "Linear.createElement()" its a function attribute so semicolon not needed//
    //Look closely 2: You can create custom attributes of need//

Create list of children elements

    Linear.createElement('div', null, [
        Linear.createElement('h1', {'custom-atr': 'some data in  atr'}, 'Its a heading'),
        Linear.createElement('p', null, 'Desctiption'),
        Linear.createElement('p', {class: 'date'}, '1998-01-01 11:12')
    ]);

    //Look closely: If you creating a child list of elements you must put it in array //

Just create a HTML element with attributes

    Linear.createElement('nav', {class: 'nav nav-bar', active: true}, null);

## Linear Hooks
We provided just one hook, useEffect like in React

Linear.useEffect(func, arg); - start your code after loading page.

    //Let's make code what after loading page close loading overflow element//
    Linear.useEffect(() => {
        document.body.querySelector('.overflow').style.display = 'none';
    }, []);

## **Conclusion**

We want to tell you that everything you want to use in React, but everyone told you that "it's wrong" or "it's wrong". HERE YOU CAN!