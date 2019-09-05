import React from "react";
import FormInput from "./input";
import FormSelect from "./select";
import FormRange from "./range";
import FormCheckbox from "./checkbox";

export default function({ type, label, error, ...atrs }) {
  const formType = type || "text";

  return (
    <div className="form-group">
      {label && <label className="form-group__label">{label}</label>}

      {["text", "number"].includes(formType) && <FormInput {...atrs} />}
      {formType === "select" && <FormSelect {...atrs} />}
      {formType === "range" && <FormRange {...atrs} />}
      {formType === "checkbox" && <FormCheckbox {...atrs} />}

      {error && (
        <div className="form-error">
          <span className="form-error__ico"></span>
          <span className="form-error__text">{error}</span>
        </div>
      )}

      <style global jsx>{`
        .form-group {
          position: relative;
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

        .form-error {
          position: absolute;
          top: 100%;
          padding: 13px 48px;
          width: 248px;
          display: block;
          background-color: #fff;
          color: var(--color-danger);
          border-radius: 4px;
          letter-spacing: 1.5px;
          box-sizing: border-box;
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
        }
        .form-error__ico {
          position: absolute;
          left: 15px;
          top: 11px;
          width: 18px;
          height: 18px;
          background-color: var(--color-danger);
          border-radius: 100%;
          content: "";
        }
        .form-error__ico::before,
        .form-error__ico::after {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 45%;
          height: 2px;
          background-color: #fff;
          content: "";
        }
        .form-error__ico::before {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        .form-error__ico::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      `}</style>
    </div>
  );
}
