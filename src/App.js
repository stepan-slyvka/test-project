import React, { useState, Fragment } from "react";

import Layout from "./components/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import Contacts from "./components/Pages/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/UI/NotFound";
import Welcome from "./components/UI/Welcome";
import Invoices from "./components/Pages/Invoice/Invoices";

function App() {
  const [isShrinked, setIsShrinked] = useState(false);

  const toggle = () => {
    setIsShrinked(!isShrinked);
  };

  return (
    <Fragment>
      <SideBar isShrinkedSidebar={isShrinked} />
      <Layout onToggle={toggle} isShrinkedLayout={isShrinked} />
      <main>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route
            path="/contacts"
            element={<Contacts isShrinkedContacts={isShrinked} />}
          />
          <Route
            path="/invoices/*"
            element={<Invoices isShrinkedContent={isShrinked} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
