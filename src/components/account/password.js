import React from "react";
import Button from "../button";

export default function() {
  return (
    <div className="account-password">
      <h2 className="title2">Пароль</h2>

      <div className="account-container">
        <div>
          <Button variant="info" block>
            Изменить пароль
          </Button>
        </div>
        <div className="account-hint">
          На вашу почту будет выслана ссылка для изменения пароля
        </div>
      </div>

      <style jsx>{`
        .account-hint {
          max-width: 300px;
        }
      `}</style>
    </div>
  );
}
