import React from "react";
import AppHeader from "../../src/components/header";
import Submenu from "../../src/components/submenu";

export default () => {
  return (
    <div>
      <AppHeader />

      <div className="container">
        <Submenu />
      </div>
    </div>
  );
};
