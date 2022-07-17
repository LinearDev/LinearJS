import { Header } from "./Header.js"

export const Layout = ({ children }) => {
    return [
        Header(),
        children
    ]
}