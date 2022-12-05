import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import NotFound from "views/404.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          {/* add routes with layouts */}
          {/* <ProtectedRoutes path="/admin" element={Admin} /> */}
          {/* <Route path="/api" element={Auth} /> */}
          {/* add routes without layouts */}

          <Route path="/landing" exact element={<Landing />} />
          <Route path="/profile" exact element={<Profile />} />
          {/* <Route path="/" element={<Index />} /> */}
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/admin/*" element={<Admin />} />

        {/* <Route path="/auth/login" exact element={<Login />} /> */}
        {/* <Route path="/auth/register" exact element={<Register />} /> */}
        <Route path="/404" exact element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        {/* <ProtectedRoutes path="/profile" element={Profile} /> */}
        {/* add redirect for first page */}
        {/* <Navigate from="*" to="/404" /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
