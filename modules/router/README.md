# Linear Router
## Why you wright your own router? Seems like you nothing to do;)
All Linear.js based on React system, so all content builds dynamically and if you see .htaccess file you understand that our app dont know where user is. And for resolving this problem I desidet to build and router module)

## How to use

!!!For moving to existing route use **Router.to()**!!!

In index.js file of templates folder you can find this example of code below.

    const structureFunc = [{
        uri: '/',
        constructor: () => {
            Linear.setDOM(App());
        }
    }, {
        uri: '/docs',
        constructor: () => {
            Linear.setDOM(Docs())
        }
    }]
    Router.container(structureFunc);

Is gives our Router information about used routes and what components on each route render.

    {
        uri - string value of url in browser (in example its home and about page),
        constructor - an arrow function with main page component
    }

## Small explanation of some functions
**render()**
    Checs changin of history or url

**to(link)**
    Adds route to browser history and start rendering of component