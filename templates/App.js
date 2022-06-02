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
}