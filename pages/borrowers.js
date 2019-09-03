import React from "react";
import AppHeader from "../src/components/header.js";

export default () => {
  return (
    <div>
      <AppHeader />

      <main>
        <div className="container">
          <h1 className="title">Найти объявления заемщиков</h1>

          <div className="row">
            <div>
              <div className="block">
                <div className="row">
                  <div>
                    <h2 className="title2">О кредите</h2>
                  </div>
                  <div>
                    <h2 className="title2">О залоге</h2>
                  </div>
                  <div>
                    <h2 className="title2">Сроки и выплаты</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* aside */}
            <aside className="col-md-3">
              <div className="block">
                <h2 className="title2">Курсы валют</h2>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};
