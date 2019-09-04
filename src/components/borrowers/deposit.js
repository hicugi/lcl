import React from "react";
import FormGroup from "../form/group.js";

export default function({ currencies, fields, change }) {
  const formGroupProps = {
    change
  };
  const formInputProps = {
    type: "number",
    placeholder: 224500400,
    hint: (fields.deposit_currency || {}).value
  };

  return (
    <section>
      <h2 className="title2">О залоге</h2>

      <div className="form-container form-container_limit form-container_border">
        {/* currency */}
        <FormGroup
          {...formGroupProps}
          type="select"
          label="Валюта залога"
          name="deposit_currency"
          options={currencies}
          value={fields.deposit_currency}
        />

        {/* from */}
        <FormGroup
          {...formGroupProps}
          {...formInputProps}
          label="Сумма залога от"
          name="deposit_from"
          value={fields.deposit_from}
        />

        {/* to */}
        <FormGroup
          {...formGroupProps}
          {...formInputProps}
          label="До"
          name="deposit_to"
          value={fields.deposit_to}
        />

        {/* rate */}
        <FormGroup
          {...formGroupProps}
          type="range"
          label="Дисконт залога от-до %"
          name="deposit_rate"
          value={fields.deposit_rate}
        />
      </div>
    </section>
  );
}
