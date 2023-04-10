import React from "react";

import { Outlet } from "react-router-dom";
import NavbarComponent from "./Component/nav/NavbarComponent";

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Outlet />
    </div>
  );
};

export default App;
