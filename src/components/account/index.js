import React from "react";
import Main from "./main";
import Password from "./password";
import Auth from "./auth";

export default () => {
  const padding = 25;
  const paddingContainer = 15;

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

        <section className="account-section">
          <Auth />
        </section>
      </div>

      <style jsx global>{`
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

        .account-container {
          display: flex;
          margin-left: -${paddingContainer}px;
          margin-right: -${paddingContainer}px;
        }
        .account-container > div {
          padding-left: ${paddingContainer}px;
          padding-right: ${paddingContainer}px;
        }
        .account-container > div:first-child {
          width: 226px;
        }

        .account-hint {
          padding-top: 4px;
          display: flex;
          align-items: center;
          color: #8f9aad;
          font-size: 16px;
          line-height: 1.25em;
        }
      `}</style>
    </div>
  );
};
