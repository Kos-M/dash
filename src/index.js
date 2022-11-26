import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

import ProtectedRoutes from "views/auth/ProtectedRoutes";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import NotFound from "views/404.js";
import Login from "views/auth/Login.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <ProtectedRoutes path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* <Route path="/api" component={Auth} /> */}

      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />

      <ProtectedRoutes path="/404" exact component={NotFound} />
      {/* <ProtectedRoutes path="/profile" component={Profile} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/404" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
