import React, { useState } from "react";

class Dialog extends React.Component {
  state = {
    bodyClass: "dialog-body--active",
    visible: true
  };

  componentDidMount() {
    if (typeof document !== "object") return;
    document.querySelector("html").classList.add(this.state.bodyClass);
  }

  close = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      const { close } = this.props;
      document.querySelector("html").classList.remove(this.state.bodyClass);

      if (!close) return;
      close();
    }, 300);
  };

  render() {
    const { title, children } = this.props;
    const { visible } = this.state;

    const cls = ["dialog"];
    if (!visible) cls.push("dialog--hide");

    return (
      <div className={cls.join(" ")}>
        <div className="dialog-bg" onClick={this.close}></div>

        <div className="dialog-container">
          <header className="dialog-header">
            <h4 className="dialog-title">{title}</h4>
            <button className="dialog-close" onClick={this.close}></button>
          </header>

          <div className="dialog-body">{children}</div>
        </div>

        <style jsx global>{`
          .dialog-body--active {
            overflow: hidden;
          }

          .dialog {
            z-index: 100;
            position: fixed;
            left: 0;
            top: 0;
            padding: 22px 15px 30px;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            animation: dialogShow linear 0.3s;
          }
          @keyframes dialogShow {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .dialog--hide {
            animation: dialogHide linear 0.3s forwards;
          }
          @keyframes dialogHide {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .dialog-bg {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.1;
          }

          .dialog-container {
            position: relative;
            padding: 0 60px;
            margin: 0 auto;
            max-width: 608px;
            background-color: #fff;
            border-radius: 8px;
            box-sizing: border-box;
          }

          .dialog-header {
            padding: 50px 0 30px;
          }

          .dialog-title {
            margin: 0;
            font-size: 24px;
            font-weight: 900;
            line-height: 1.46em;
            letter-spacing: 2px;
          }

          .dialog-close {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 18px;
            height: 18px;
            background: none;
            border: none;
          }
          .dialog-close::before,
          .dialog-close::after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: center;
            width: 100%;
            height: 2px;
            background: #c8ced7;
            border-radius: 2px;
            content: "";
          }
          .dialog-close::before {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
          .dialog-close::after {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          .dialog-body {
            padding-bottom: 60px;
          }

          .dialog-info p {
            margin: 0;
            font-size: 16px;
            line-height: 1.6em;
            letter-spacing: 1.25px;
          }
          .dialog-info p:not(:last-child) {
            margin-bottom: 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default Dialog;
