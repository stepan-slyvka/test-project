import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import Contacts from "./components/Pages/Contacts/Contacts";
import Invoices from "./components/Pages/Invoice/Invoices";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isShrinked, setIsShrinked] = useState(false);

  const toggle = () => {
    setIsShrinked(!isShrinked);
  };

  return (
    <>
      <SideBar isShrinkedSidebar={isShrinked} />
      <Layout onToggle={toggle} isShrinkedLayout={isShrinked} />
      <Routes>
        <Route
          path="/contacts"
          element={<Contacts isShrinkedContacts={isShrinked} />}
        />
        <Route
          path="/invoice"
          element={<Invoices isShrinkedContent={isShrinked} />}
        />
      </Routes>
    </>
  );
}

export default App;
