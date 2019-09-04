import React from "react";
import Ico from "../../ico/checked.svg";

export default function({ name, options, value, change }) {
  function handleChange(item) {
    const index = (value || []).findIndex(
      v => JSON.stringify(v) === JSON.stringify(item)
    );
    const newValue = JSON.parse(JSON.stringify(value || []));

    if (index > -1) newValue.splice(index, 1);
    else newValue.push(item);

    if (change)
      change({
        name,
        value: newValue
      });
  }

  return (
    <div className="checkbox">
      {options.map((item, index) => (
        <label key={index} className="checkbox-item">
          <input
            type="checkbox"
            name={name}
            value={item.value}
            checked={
              (value || []).find(
                v => JSON.stringify(v) === JSON.stringify(item)
              ) !== undefined
            }
            onChange={() => handleChange(item)}
          />
          <span>{item.text}</span>
          <Ico />
        </label>
      ))}

      <style jsx global>{`
        .checkbox {
          padding-top: 15px;
        }

        .checkbox-item {
          position: relative;
          height: 25px;
          padding-left: 38px;
          display: flex;
          align-items: center;
          font-size: 18px;
        }
        .checkbox-item + .checkbox-item {
          margin-top: 15px;
        }

        .checkbox-item svg {
          display: none;
        }

        .checkbox-item input {
          width: 0;
          height: 0;
          position: absolute;
          opacity: 0;
        }
        .checkbox-item input:focus + span::before {
          box-shadow: 0 0 4px #9ea6ff;
        }
        .checkbox-item input:checked + span::before {
          background-color: var(--color);
          border-color: var(--color);
        }
        .checkbox-item input:checked ~ svg {
          position: absolute;
          display: block;
          width: 14px;
          height: 14px;
          left: 4px;
        }

        .checkbox-item span::before {
          position: absolute;
          width: 22px;
          height: 22px;
          border: 2px solid #c8ced7;
          box-sizing: border-box;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 4px;
          content: "";
        }
      `}</style>
    </div>
  );
}
