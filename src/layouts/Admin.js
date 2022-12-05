import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import DashDemo from "views/admin/DashDemo.js";
import EditorPage from "views/admin/EditorPage.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

import ProtectedRoute from "views/auth/ProtectedRoutes";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboardDemo"
              exact
              element={
                <ProtectedRoute>
                  <DashDemo />
                </ProtectedRoute>
              }
            />
            <Route path="editor" exact element={<EditorPage />} />
            <Route
              path="maps"
              exact
              element={
                <ProtectedRoute>
                  <Maps />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              exact
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="tables"
              exact
              element={
                <ProtectedRoute>
                  <Tables />
                </ProtectedRoute>
              }
            />
            {/* <Navigate from="/admin" to="/admin/dashboard" /> */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
