import React from "react";
import FormGroup from "../form/group.js";

export default function({ fields, change }) {
  const formGroupProps = {
    change
  };

  return (
    <section>
      <h2 className="title2">Сроки и выплаты</h2>

      <div className="form-container">
        {/* rate */}
        <FormGroup
          {...formGroupProps}
          type="range"
          label="Сроки сделки"
          name="deadline_rate"
          max={200}
          hint="дн"
          value={fields.deadline_rate}
        />

        {/* payout */}
        <FormGroup
          {...formGroupProps}
          type="checkbox"
          label="Частота выплат"
          name="deadline_payout"
          options={[
            {
              text: "Каждую неделю",
              value: "week"
            },
            {
              text: "Каждый месяц",
              value: "month"
            },
            {
              text: "В конце срока",
              value: "end"
            }
          ]}
          value={fields.deadline_payout}
        />
      </div>
    </section>
  );
}
