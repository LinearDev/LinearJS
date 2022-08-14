import { Linear } from "../modules/linear/Linear.js";

export const Error404 = () => {
    Linear.setDOM(Linear.createElement("h1", {style: 'text-align: center;'}, "404: page not found"));
}