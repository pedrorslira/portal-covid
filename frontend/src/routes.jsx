import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import Consulta from "./pages/Consulta";

const routes = [
  {
    component: Home,
    name: "Home",
    path: "/",
    visible: false,
  },
  {
    component: Agendamento,
    name: "Agendamento",
    path: "/agendamento",
  },
  {
    component: Consulta,
    name: "Consulta",
    path: "/consulta",
  },
];

const Routes = () => (
  <BrowserRouter>
    <Navbar title="Portal da Vacina" routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
