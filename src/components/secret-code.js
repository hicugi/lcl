import React from "react";

export default function() {
  return (
    <div className="secret-code">
      <div className="secret-code__image">
        <img src="/image/code.jpg" alt="QR code" />
      </div>
      <div className="secret-code__info">
        <h4 className="secret-code__title">Секретный код</h4>
        <p className="secret-code__text">1X23 232N 6XVV NNPN</p>
      </div>
      <style jsx>{`
        .secret-code {
          display: flex;
        }
        .secret-code > div {
          padding-left: 20px;
          padding-right: 20px;
        }

        .secret-code__image {
          max-width: 160px;
        }
        .secret-code__image img {
          width: 100%;
          display: block;
        }

        .secret-code__info {
          padding-top: 3px;
        }
        .secret-code__title {
          margin: 0 0 14px;
          color: #9ba5b5;
          font-size: 14px;
          font-weight: normal;
          letter-spacing: 1px;
        }
        .secret-code__text {
          margin: 0;
          font-size: 18px;
          letter-spacing: -0.5px;
        }
      `}</style>
    </div>
  );
}
