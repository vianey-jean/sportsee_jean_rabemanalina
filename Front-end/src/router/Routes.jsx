import React from 'react'
import { Outlet } from 'react-router-dom'
import Tableau2Bord from '../controller/tableauDeBord/tableauDeBord'
import Home from '../controller/home/home'
import ErrorPage from '../controller/errorPage/errorPage'
import Nav from '../view/nav/nav'
import SideBar from '../view/sideBar/sideBar'

/**
 * Dom injector and creation of router
 * @return routes
 */

export const routes = [
  {
    path: '/',
    element: <Layout />, //par défaut c'est layout
    children: [
      {
        index: true, //dans le main, c'est par défaut c'est la page home
        element: <Home />,
      },
      {
        path: '/user/:userId',
        element: <Tableau2Bord />, //on selection id par api
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]

function Layout() {
  // par défaut, c'est header, sidebar et outlet qui change
  return (
    <>
      <Nav />
      <SideBar />
      <section className="elementsToDisplay">
        <Outlet />
      </section>
    </>
  )
}
