import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "../components/login/login";
import SingUp from "../components/singUp/singUp";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/singUp" component={SingUp} />
    <Redirect from="*" to="/" componet={Login} />
  </Switch>
);
