import React from "react";
import Main from "./main";
import Password from "./password";

export default () => {
  const padding = 25;

  return (
    <div className="account">
      {/* avatar */}
      <div className="account__avatar">
        <div className="avatar"></div>
      </div>

      {/* main */}
      <div className="account__main">
        <Main />

        <section className="account-section">
          <Password />
        </section>
      </div>

      <style jsx>{`
        .account {
          padding: 0 8px;
          margin: 0 -${padding}px;
          display: flex;
        }

        .account__avatar {
          padding-left: ${padding}px;
          padding-right: ${padding}px;
          width: 180px;
        }
        .account__main {
          padding-left: ${padding}px;
          padding-right: ${padding}px;
          flex-grow: 1;
        }

        .avatar {
          padding-top: 100%;
          width: 100%;
          border-radius: 100%;
          background: #a4aebd;
        }

        .account-section {
          padding-top: 30px;
          border-top: 1px solid #e0e4e8;
          margin-top: 52px;
        }
      `}</style>
    </div>
  );
};
