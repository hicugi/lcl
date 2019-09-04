import React from "react";
import AppHeader from "../../src/components/header";
import Submenu from "../../src/components/submenu";
import Account from "../../src/components/account";

export default () => {
  return (
    <div>
      <AppHeader />

      <div className="container">
        <Submenu />

        <div className="row">
          <div className="col-md-9">
            <div className="block">
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
