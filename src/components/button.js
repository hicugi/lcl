import React from "react";

export default function({ variant, children, click }) {
  const cls = ["btn"];
  cls.push(`btn_${variant || "default"}`);

  return (
    <button
      className={cls.join(" ")}
      onClick={e => {
        click && click(e);
      }}
    >
      {children}

      <style jsx>{`
        .btn {
          height: 60px;
          padding: 0 48px;
          border: none;
          display: inline-block;
          font-size: 18px;
          border-radius: 6px;
        }
        .btn_default {
          background-color: #fff;
        }
        .btn_info {
          background-color: var(--color);
          color: #fff;
        }
      `}</style>
    </button>
  );
}
