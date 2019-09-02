import React from "react";

export default function() {
  return (
    <div className="profile">
      <button className="profile-btn">AK</button>

      <style jsx>{`
        .profile-btn {
          width: 40px;
          height: 40px;
          padding: 0;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          background: linear-gradient(135deg, #fc567d, #fd9379);
          color: #fff;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
