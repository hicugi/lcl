import React, { useState } from "react";
import FormToggle from "../form/toggle";

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
  const [value, setValue] = useState(options[0]);

  function handleChange(value) {
    setValue(value);
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
