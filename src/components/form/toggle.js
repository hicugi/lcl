import React from "react";

export default function({ options, value, change }) {
  const colorGray = "#e0e4e8";
  const colorActive = "#00cd8f";

  const handleChange = item => {
    if (!change) return;
    change(options.find(v => v.value !== item.value));
  };

  return (
    <div className="toggle">
      {(options || [])
        .filter(item => value && JSON.stringify(value) === JSON.stringify(item))
        .map((item, index) => {
          const cls = ["toggle-item"];
          if (item.value) cls.push("toggle-item--active");

          return (
            <label
              key={index}
              className={cls.join(" ")}
              onClick={() => handleChange(item)}
            >
              <span className="toggle-item__icon"></span>
              <span>{item.text}</span>
            </label>
          );
        })}

      <style jsx>{`
        .toggle-item {
          position: relative;
          padding-left: 62px;
          display: block;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.3px;
          color: ${colorGray};
          transition: linear 0.2s;
        }
        .toggle-item__icon {
          position: absolute;
          left: 0;
          width: 40px;
          height: 100%;
          background-color: ${colorGray};
          border-radius: 24px;
          transition: linear 0.2s;
        }
        .toggle-item__icon::before {
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
          width: 13px;
          height: 13px;
          border-radius: 100%;
          background-color: #fff;
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
          content: "";
          transition: linear 0.2s;
        }

        .toggle-item--active {
          color: ${colorActive};
        }
        .toggle-item--active .toggle-item__icon {
          background-color: ${colorActive};
        }
        .toggle-item--active .toggle-item__icon::before {
          left: calc(100% - 18px);
        }
      `}</style>
    </div>
  );
}
