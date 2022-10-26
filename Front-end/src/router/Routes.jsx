import React from 'react'
import { Outlet } from "react-router-dom";
import Dashboard from '../controller/tableau2Bord'
import UserSelect from '../controller/home'
import ErrorPage from '../controller/errorPage'
import LeftNavBar from '../view/sideBar'
import TopNav from '../view/nav'

export const routes = [
  {
      path: "/",
      element: <Layout />,  //par défaut c'est layout
      children: [
          {
              index: true, //dans le main, c'est par défaut c'est la page home
              element: <UserSelect />,
          },
          {
              path: "/:userId",
              element: <Dashboard />,  //on selection id par api
          },
          {
              path: "*",
              element: <ErrorPage />,
          },
      ],
  },
];

function Layout () {  // par défaut, c'est header, sidebar et outlet qui change
  return (
<>
  <TopNav />
  <LeftNavBar />
  <section className="elementsToDisplay">
      <Outlet />
  </section>
  </>
  );
}

