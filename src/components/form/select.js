import React from "react";

class FormSelect extends React.Component {
  state = {
    isVisible: false
  };

  constructor(props) {
    super(props);
    this.$el = React.createRef();
  }

  componentDidMount() {
    if (typeof window !== "object") return;

    window.addEventListener("click", e => {
      const { current } = this.$el || {};
      if (
        !current ||
        !current.classList.contains("select--active") ||
        current.contains(e.target)
      )
        return;

      this.setState({ isVisible: false });
    });
  }

  onToggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  handleSelect = value => {
    this.setState({ isVisible: false });

    const { change } = this.props;
    if (change) {
      change({
        name: this.props.name,
        value
      });
    }
  };

  render() {
    const { type, value, options, placeholder } = this.props;
    const { isVisible } = this.state;

    const cls = ["select"];
    if (isVisible) cls.push("select--active");

    return (
      <div
        ref={this.$el}
        className={cls.join(" ")}
        type={type || "text"}
        value={value}
      >
        <button className="select-btn form-control" onClick={this.onToggle}>
          <span className="select-btn__text">
            {value ? value.text : placeholder}
          </span>
        </button>

        <ul className="select-list">
          {options.map((item, index) => {
            const itemCls = ["select-list__item"];
            if (value && JSON.stringify(value) === JSON.stringify(item)) {
              itemCls.push("select-list__item--active");
            }

            return (
              <li key={index} className={itemCls.join(" ")}>
                <button onClick={() => this.handleSelect(item)}>
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>

        <style jsx>{`
          .select {
            position: relative;
            max-width: 300px;
          }

          .select-btn {
            position: relative;
          }
          .select-btn::after {
            position: absolute;
            margin-top: -2px;
            right: 23px;
            top: 50%;
            transform: translateY(-50%) rotate(135deg);
            width: 7px;
            height: 7px;
            border: 2px solid;
            border-color: #000 #000 transparent transparent;
            content: "";
            transition: ease-out 0.2s;
          }
          .select-btn__text {
            display: block;
            max-width: 242px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .select-list {
            z-index: 1;
            position: absolute;
            display: none;
            top: 100%;
            width: 100%;
            padding: 12px 8px;
            border: 1px solid #f4f5f6;
            margin: 0;
            background-color: #fff;
            box-sizing: border-box;
            border-radius: 4px;
            list-style: none;
          }
          .select-list__item button {
            display: block;
            width: 100%;
            padding: 16px 20px;
            border: none;
            background: none;
            font-size: 16px;
            text-align: left;
          }
          .select-list__item:hover,
          .select-list__item--active {
            background-color: #f8f9fb;
          }

          .select--active .select-list {
            display: block;
          }
          .select--active .select-btn::before {
            margin-top: 5px;
            transform: translateY(-50%) rotate(135deg) scale(-1, -1);
          }
        `}</style>
      </div>
    );
  }
}

export default FormSelect;
