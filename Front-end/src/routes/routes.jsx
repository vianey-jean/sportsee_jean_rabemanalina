import { Outlet } from "react-router-dom";
import Header from '../compenents/header';
import SideBar from "../compenents/sideBar";
import Home from '../pages/home';
import Error from '../pages/error';
import UserMocked from '../pages/userMocked';
import UserApi from '../pages/userApi';
import React from "react";

/**
 * Dom injector and creation of router
 * @return routes
 */

export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/UserMocked/:id",
                element: <UserMocked />,
            },
            {
                path: "/User/:id",
                element: <UserApi />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
];

function Layout () {
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
    