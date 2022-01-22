import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { contactsPageLink, dashboardLink, myAppsPageLink } from "../routes";
import Header from "./layout/Header";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import MyApps from "./pages/MyApps";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`${myAppsPageLink}`} element={<MyApps />} />
        <Route path={`${dashboardLink}`} element={<Dashboard />} />
        <Route path={`${contactsPageLink}`} element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
