import React from "react";
import MainPage from "../../components/pages/home/MainPage";
import Interior from "../../components/pages/interior";
import About from "../../components/pages/about";
import Menu from "../../components/pages/menu";
import Contacts from "../../components/pages/contacts";
import Detail from "../pages/similar";
import Similar from "../pages/detail";
export const routes = [
  {
    id: 1,
    path: "/",
    element: <MainPage />,
  },
  {
    id: 2,
    path: "/interior",
    element: <Interior />,
  },
  {
    id: 3,
    path: "/about",
    element: <About />,
  },
  {
    id: 4,
    path: "/menu",
    element: <Menu />,
  },
  {
    id: 5,
    path: "/contacts",
    element: <Contacts />,
  },
  {
    id: 6,
    path: "/similar/:similarName",
    element: <Detail />,
  },
  {
    id: 7,
    path: "/detail/:detailId",
    element: <Similar />,
  },
];
