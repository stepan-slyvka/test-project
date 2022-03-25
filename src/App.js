import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import Layout from "./components/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import Contacts from "./components/Pages/Contacts";

function App() {
  const [isShrinked, setIsShrinked] = useState(false);

  const toggle = () => {
    setIsShrinked(!isShrinked);
  };

  return (
    <Fragment>
      <SideBar isShrinkedSidebar={isShrinked} />
      <Layout onToggle={toggle} isShrinkedLayout={isShrinked} />
      <Contacts isShrinkedContacts={isShrinked} />
    </Fragment>
  );
}

export default App;
