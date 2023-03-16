import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";

import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/Home";
import { CountryDetail } from "./containers/CountryDetail";

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/corona",
    label: "Home",
    element: <Home />,
  },
  {
    id: 1,
    path: "/countryDetail",
    label: "CountryDetail",
    element: <CountryDetail />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router: RouterElement) => {
    return {
      path: router.path,
      element: <MainLayout>{router.element}</MainLayout>,
    };
  })
);
