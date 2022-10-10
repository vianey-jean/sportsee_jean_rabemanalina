import { Outlet } from "react-router-dom";
import Header from '../compenents/header';
import SideBar from "../compenents/sideBar";
import Home from '../pages/home';
import Error from '../pages/error';
import UserMocked from '../pages/userMocked';

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
    