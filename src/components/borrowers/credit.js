import React from "react";
import FormGroup from "../form/group.js";

export default function({ currencies, fields, change }) {
  const formGroupProps = {
    change
  };

  return (
    <section>
      <h2 className="title2">О кредите</h2>

      <div className="form-container form-container_limit">
        {/* currency */}
        <FormGroup
          {...formGroupProps}
          type="select"
          label="Валюта кредита"
          name="credit_currency"
          options={currencies}
          value={fields.credit_currency}
        />

        {/* from */}
        <FormGroup
          {...formGroupProps}
          type="number"
          label="Сумма кредита от"
          name="credit_from"
          value={fields.credit_from}
          placeholder="224500400"
          hint={(fields.credit_currency || {}).value}
        />

        {/* to */}
        <FormGroup
          {...formGroupProps}
          type="number"
          label="До"
          name="credit_to"
          value={fields.credit_to}
          placeholder="224500400"
          hint={(fields.credit_currency || {}).value}
        />

        {/* rate */}
        <FormGroup
          {...formGroupProps}
          type="range"
          label="Ставка от-до %"
          name="credit_rate"
          value={fields.credit_rate}
        />
      </div>
    </section>
  );
}
