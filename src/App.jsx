import React from "react";

import { Outlet } from "react-router-dom";
import NavbarComponent from "./Component/nav/NavbarComponent";
import FooterCom from "./Component/FooterCom";

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Outlet />
      <div className="mt-auto ">
      <FooterCom/>
      </div>
    </div>
  );
};

export default App;
