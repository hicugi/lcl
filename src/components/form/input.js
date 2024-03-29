import React from "react";

export default function({ type, name, value, hint, placeholder, change }) {
  const cls = ["form-input", "form-input__control"];
  if (hint) cls.push("form-input_hint");

  const handleChange = e => {
    if (!change) return;
    change({ name, value: e.target.value });
  };

  return (
    <div className={cls.join(" ")}>
      <input
        className="form-control"
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {hint && <span className="form-input__hint">{hint}</span>}

      <style jsx>{`
        .form-input {
          position: relative;
          max-width: 248px;
        }
        .form-input__control {
          padding-top: 4px;
        }

        .form-input__hint {
          position: absolute;
          right: 20px;
          top: 50%;
          margin-top: 2px;
          transform: translateY(-50%);
          font-size: 16px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
