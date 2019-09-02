import React from "react";
import Link from "next/link";
import AppNav from "./nav";

export default function() {
  const height = 70;

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-container">
          <div className="header-container__left">
            <div className="logo">
              <Link href="/">
                <a>LCL</a>
              </Link>
            </div>

            <AppNav />
          </div>

          <div className="header-container__right"></div>
        </div>
      </div>

      <style global jsx>{`
        :root {
          --color: #ffad0d;
        }

        body {
          margin: 0;
          font-family: "Roboto", sans-serif;
        }
        strong {
          font-family: "Roboto-Bold", sans-serif;
          font-weight: bold;
        }

        .container {
          max-width: 1230px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .app-header {
          background-color: #000;
        }

        .header-container {
          height: ${height}px;
          display: flex;
          justify-content: space-between;
        }
        .header-container__left {
          width: 72.4%;
          display: flex;
          justify-content: space-between;
        }

        .logo a {
          width: 102px;
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
      `}</style>
    </header>
  );
}
