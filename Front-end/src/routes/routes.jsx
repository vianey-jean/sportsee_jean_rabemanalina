//import react-router-dom, header, sidebar, home, error, userMocked, userApi et react

import { Outlet } from "react-router-dom";
import Header from '../compenents/header';
import SideBar from "../compenents/sideBar";
import Home from '../pages/home';
import Error from '../pages/error';
import UserApi from '../pages/userApi';
import React from "react";

/**
 * Dom injector and creation of router
 * @return routes
 */

export const routes = [
    {
        path: "/",
        element: <Layout />,  //par défaut c'est layout
        children: [
            {
                index: true, //dans le main, c'est par défaut c'est la page home
                element: <Home />,
            },
            {
                path: "/User/:id",
                element: <UserApi />,  //on selection id par api
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
];

function Layout () {  // par défaut, c'est header, sidebar et outlet qui change
    return (
<>
    <Header />
    <section className="elementsToDisplay">
        <SideBar />
        <Outlet />
    </section>
    </>
    );
}
    