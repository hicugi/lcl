import React from "react";
import FormInput from "./input";
import FormSelect from "./select";
import FormRange from "./range";
import FormCheckbox from "./checkbox";

export default function({ type, label, ...atrs }) {
  const formType = type || "text";

  return (
    <div className="form-group">
      <label className="form-group__label">{label}</label>

      {["text", "number"].includes(formType) && <FormInput {...atrs} />}
      {formType === "select" && <FormSelect {...atrs} />}
      {formType === "range" && <FormRange {...atrs} />}
      {formType === "checkbox" && <FormCheckbox {...atrs} />}

      <style global jsx>{`
        .form-group {
          margin-bottom: 24px;
        }
        .form-group__label {
          margin-bottom: 9px;
          display: block;
          color: #a0a9b9;
          letter-spacing: 1px;
        }

        .form-control {
          width: 100%;
          height: 60px;
          padding: 0 15px;
          border: 1px solid #e1e4e8;
          box-sizing: border-box;
          display: block;
          background: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 0.4px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
