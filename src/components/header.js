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
          --color-danger: #ff4b5b;
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

        main {
          padding-bottom: 40px;
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
          position: relative;
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
        .logo a::before {
          position: absolute;
          width: 30px;
          height: 42px;
          left: 0;
          background-color: var(--color);
          content: "";
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
          .col-md-9 {
            width: 75%;
          }
        }

        .block {
          border: 1px solid #f7f7f7;
          padding: 32px 30px;
          background-color: #fff;
          border-radius: 4px;
          box-shadow: 0 1px 2px #e0e4e8;
        }
        .block__footer {
          padding-top: 17px;
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

        .form-container_limit {
          max-width: 300px;
        }
        .form-container_border {
          position: relative;
        }
        .form-container_border::before,
        .form-container_border::after {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background-color: #e2e4e8;
          content: "";
        }
        .form-container_border::before {
          left: -26px;
        }
        .form-container_border::after {
          right -40px
        }
        @media (max-width: 1519px) {
          .form-container_border::before {
            left: -10px;
          }
          .form-container_border::after {
            right -10px
          }
        }
      `}</style>
    </header>
  );
}
