import React from "react";
import Button from "../button";
import ShieldIco from "../../ico/shield.svg";
import EditIco from "../../ico/edit.svg";

export default function() {
  return (
    <div className="account-info">
      <ShieldIco className="account-shield" />

      <header className="account-header">
        <div>
          <h2 className="account-name">Ахан Кусаинов</h2>
          <p className="account-status">Ожиание верификации</p>
        </div>
        <div>
          <Button variant="warning">
            <EditIco viewBox="0 0 94.599998 94.800003" />
            <span>Редактировать</span>
          </Button>
        </div>
      </header>

      <ul className="account-list">
        <li>
          <a href="mailto:akhankussainov@gmail.com">akhankussainov@gmail.com</a>
        </li>
        <li>
          <a href="tel:+77759876543">+7 (775) 987-65-43</a>
        </li>
        <li>Республика Казахстан</li>
      </ul>

      <style jsx global>{`
        .account-info {
          position: relative;
          padding-top: 3px;
        }

        .account-shield {
          position: absolute;
          width: 24px;
          height: 24px;
          left: -36px;
          top: 6px;
        }

        .account-header {
          margin-bottom: 34px;
          display: flex;
        }
        .account-header > div:first-child {
          flex-grow: 1;
        }

        .account-name {
          margin: 0 0 8px;
          font-size: 28px;
          font-weight: 900;
        }
        .account-status {
          margin: 0;
          letter-spacing: 1.7px;
        }

        .account-list {
          padding: 0;
          margin: 0;
          font-size: 18px;
          list-style: none;
          letter-spacing: 0.1px;
        }
        .account-list li:not(:last-child) {
          margin-bottom: 14px;
        }
        .account-list a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
