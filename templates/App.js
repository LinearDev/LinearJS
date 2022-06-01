import { Linear } from "../server/linear/Linear.js";
import { Header } from "./components/Header.js";
import { AllPageBlock } from "./components/AllPageBlock.js";
import { BlocksPage } from "./components/AllBlockPages/BlocksPage.js";
import { Footer } from "./components/Footer.js";
//import { Router } from "../server/router/Router.js";

export const App = () => {
    return [
        Header(),
        AllPageBlock(),
        BlocksPage(),
        Footer()
    ]
}/*
<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-light box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
    <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-light box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-white box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-white box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-white box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-white box-shadow mx-auto"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"></script>
<script>window.jQuery || document.write('
    <script src="../../assets/js/vendor/jquery-slim.min.js">
        <
        \/script>')
    </script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>
    <script src="../../assets/js/vendor/holder.min.js"></script>
    <script>
        Holder.addTheme('thumb', {
        bg: '#55595c',
        fg: '#eceeef',
        text: 'Thumbnail'
    });
    </script>
</body>*/