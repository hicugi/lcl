import React from "react";
import Ico from "../ico/notification.svg";

export default function() {
  return (
    <div className="notify">
      <button className="notify-btn">
        <span className="notify-btn__ico">
          <Ico />
        </span>
        <span className="notify-btn__count">12</span>
      </button>

      <style global jsx>{`
        .notify-btn {
          position: relative;
          padding: 0 0 0 27px;
          display: flex;
          background: none;
          border: none;
        }

        .notify-btn__ico {
          width: 16px;
          height: 100%;
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .notify-btn__ico svg {
          width: 100%;
        }
        .notify-btn__ico path {
          fill: #fff;
        }

        .notify-btn__count {
          height: 28px;
          padding-left: 8px;
          padding-right: 8px;
          display: flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          border-radius: 4px;
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
