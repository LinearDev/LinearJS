import { Linear } from "../server/linear/Linear.js";
//import { Router } from "../server/router/Router.js";

export const App = () => {
    return Linear.createElement('nav', {class: 'navbar navbar-expand-lg navbar-light bg-light'}, [
        Linear.createElement('a', {class: 'navbar-brand', href: '/about'}, 'Navbar'),
        Linear.createElement('button', {class: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': "#navbarSupportedContent", 'aria-controls': "navbarSupportedContent", 'aria-expanded': "false", 'aria-label': "Toggle navigation"},
            Linear.createElement('span', {class: 'navbar-toggler-icon'}, null)),
        Linear.createElement('div', {class: 'collapse navbar-collapse', id: 'navbarSupportedContent'},[
            Linear.createElement('ul', {class: 'navbar-nav mr-auto'}, [
                Linear.createElement('li', {class: 'nav-item active'},
                    Linear.createElement('a', {class: 'nav-link', href: '3'}, 'Home')),
                Linear.createElement('li', {class: 'nav-item'},
                    Linear.createElement('a', {class: 'nav-link', href: '3'}, 'Link')),
                Linear.createElement('li', {class: 'nav-item dropdown'}, [
                    Linear.createElement('a', {class: 'nav-link dropdown-toggle', href: '3', id: "navbarDropdown", role: "button", 'data-toggle': "dropdown", 'aria-haspopup': "true", 'aria-expanded': "false"}, 'Dropdown'),
                    Linear.createElement('div', {class: "dropdown-menu", 'aria-labelledby': "navbarDropdown"}, [
                        Linear.createElement('a', {class: 'dropdown-item', href: '#'}, 'Action'),
                        Linear.createElement('a', {class: 'dropdown-item', href: '#'}, 'Another Action'),
                        Linear.createElement('div', {class: 'dropdown-divider', href: '#'}, null),
                        Linear.createElement('a', {class: 'dropdown-item', href: '#'}, 'Something else here'),
                    ])
                ]),
                Linear.createElement('li', {class: 'nav-item'},
                    Linear.createElement('a', {class: 'nav-link disabled', href: '3'}, 'Disabled')),
            ]),
            Linear.createElement('form', {class: 'form-inline my-2 my-lg-0'}, [
                Linear.createElement('input', {class: "form-control mr-sm-2", type: "search", placeholder: "Search", 'aria-label': "Search"}, null),
                Linear.createElement('button', {class: 'btn btn-outline-success my-2 my-sm-0', type: 'submit'}, 'Search')
            ])
        ])
    ])
}

/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>*/