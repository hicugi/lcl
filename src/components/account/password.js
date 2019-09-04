import React from "react";
import Button from "../button";

export default function() {
  const padding = 14;

  return (
    <section className="account-password">
      <h2 className="title2">Пароль</h2>

      <div className="password-container">
        <div>
          <Button variant="info">Изменить пароль</Button>
        </div>
        <div className="password-hint">
          На вашу почту будет выслана ссылка для изменения пароля
        </div>
      </div>

      <style jsx>{`
        .password-container {
          display: flex;
          margin-left: -${padding}px;
          margin-right: -${padding}px;
        }
        .password-container > div {
          padding-left: ${padding}px;
          padding-right: ${padding}px;
        }
        .password-hint {
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}
