import React from "react";
import { Switch } from "react-router-dom";

// # Routes
import MyRoute from "../../src/routes/MyRoute";

// # Pages
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
