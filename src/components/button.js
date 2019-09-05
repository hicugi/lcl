import React from "react";

export default function({ variant, block, children, click }) {
  const cls = ["btn"];
  cls.push(`btn_${variant || "default"}`);

  if (block) cls.push("btn_block");

  return (
    <button
      className={cls.join(" ")}
      onClick={e => {
        click && click(e);
      }}
    >
      {children}

      <style jsx global>{`
        .btn {
          position: relative;
          height: 60px;
          padding: 0 48px;
          border: none;
          display: inline-block;
          background: none;
          border-radius: 6px;
          font-size: 18px;
        }

        .btn_default {
          background-color: #fff;
        }
        .btn_info {
          background-color: var(--color);
          color: #fff;
        }

        .btn_warning {
          height: 40px;
          padding: 0 20px;
          border: 1px solid var(--color);
          color: var(--color);
          font-size: 16px;
        }
        .btn_danger {
          border: 2px solid var(--color-danger);
          color: var(--color-danger);
        }

        .btn_block {
          padding: 0 15px;
          width: 100%;
          display: block;
        }

        .btn svg {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
        }
        .btn svg + span {
          padding-left: 22px;
        }
      `}</style>
    </button>
  );
}
