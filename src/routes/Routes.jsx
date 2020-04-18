import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../components/home/home";
import Dashboard from "../components/dashboard/dashboard";
import Quadro from "../components/quadro/quadro";
import Perfil from "../components/perfil/perfil";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/perfil" component={Perfil} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/quadro" component={Quadro} />
    <Redirect from="*" to="/" componet={Home} />
  </Switch>
);
