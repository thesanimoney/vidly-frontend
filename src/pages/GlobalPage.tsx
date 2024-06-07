import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

function GlobalPage() {
    return <>
        <Header/>
        <Outlet></Outlet>
    </>
}

export default GlobalPage;