import React from "react";
import Link from "next/link";
import AppNav from "./nav";
import AppNotifications from "./notifications";
import AppProfile from "./profile";

export default function() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="header-container">
          {/* logo & nav */}
          <div className="header-container__left">
            <div className="logo">
              <Link href="/">
                <a>LCL</a>
              </Link>
            </div>

            <AppNav />
          </div>

          {/* notifications & profile */}
          <div className="header-container__right">
            <AppNotifications />
            <AppProfile />
          </div>
        </div>
      </div>

      <style global jsx>{`
        :root {
          --color: #ffad0d;
          --color-title: #022047;
        }

        *,
        *::before,
        *::afetr {
          box-sizing: border-box;
        }

        html,
        body {
          height: 100%;
        }
        body {
          margin: 0;
          background-color: #fafafa;
          font-family: "Roboto", sans-serif;
          font-size: 14px;
        }
        strong {
          font-family: "Roboto-Bold", sans-serif;
          font-weight: bold;
        }

        .container {
          max-width: 1520px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .app-header {
          margin-bottom: 44px;
          background-color: #000;
        }

        .header-container {
          height: 70px;
          display: flex;
          justify-content: space-between;
        }
        .header-container__left {
          width: 896px;
          display: flex;
          justify-content: space-between;
        }
        .header-container__right {
          display: flex;
          align-items: center;
        }
        .header-container__right > div + div {
          margin-left: 20px;
        }

        .logo a {
          width: 106px;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
          letter-spacing: 6px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-left: -10px;
          margin-right: -10px;
        }
        .row > * {
          padding-left: 10px;
          padding-right: 10px;
          box-sizing: border-box;
        }
        .row > *:not([class^="col-"]) {
          flex-grow: 1;
        }
        @media (min-width: 992px) {
          .col-md-3 {
            width: 25%;
          }
          .col-md-4 {
            width: 33.333333%;
          }
        }

        .block {
          border: 1px solid #f7f7f7;
          padding: 32px 30px;
          background-color: #fff;
          border-radius: 4px;
        }

        .title {
          margin: 0 0 18px;
          color: var(--color-title);
          font-size: 28px;
          font-weight: black;
        }
        .title2 {
          margin: 0 0 25px;
          color: var(--color-title);
          font-size: 18px;
          font-weight: 900;
        }
      `}</style>
    </header>
  );
}
