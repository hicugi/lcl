import React, { useState } from "react";
import FormToggle from "../form/toggle";
import AuthDialog from "./auth-dialog";

export default function() {
  const options = [
    {
      text: "Вклюечена",
      value: true
    },
    {
      text: "Выключена",
      value: false
    }
  ];
  const [value, setValue] = useState(options[1]);
  const [show, setDialog] = useState(false);

  function handleChange(item) {
    setDialog((item || {}).value === true);
    setValue(item);
  }

  return (
    <div>
      <h2 className="title2">2-х факторная аутентификация</h2>

      <div className="account-container">
        <div className="account-form">
          <FormToggle options={options} value={value} change={handleChange} />
        </div>
        <div className="account-hint">
          2-х факторная аутентификация делает ваши данные более защищенными.
        </div>
      </div>

      {show && <AuthDialog close={() => setDialog(false)} />}

      <style jsx>{`
        .account-form {
          padding-top: 5px;
        }
        .account-hint {
          max-width: 340px;
        }
      `}</style>
    </div>
  );
}
