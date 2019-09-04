import React from "react";

class Range extends React.Component {
  state = {
    before: 0,
    after: 100
  };

  constructor(props) {
    super(props);

    this.$range = React.createRef();
    this.$line = React.createRef();
    this.$btnBefore = React.createRef();
    this.$btnAfter = React.createRef();
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.parseProps();
    });
  }
  UNSAFE_componentWillReceiveProps() {
    setTimeout(() => {
      this.parseProps();
    });
  }

  parseProps() {
    const { value, max: propMax } = this.props;
    const { min, max } = value || {};

    let newState = {
      before: 0,
      after: 100
    };

    const p = (propMax || 100) / 100;
    if (min) newState.before = min / p;
    if (max) newState.after = (max - min) / p;

    this.setState(newState);
  }

  componentDidMount() {
    if (typeof window !== "object") return;

    let left = 0;
    let width = 100;
    let currentElm = null;
    let starPosition = null;

    const btnBefore = this.$btnBefore.current;
    const btnAfter = this.$btnAfter.current;

    document.body.addEventListener("mousemove", e => {
      const { clientX: x } = e;
      const range = this.$range.current;

      if (!range || ![btnBefore, btnAfter].includes(currentElm)) return;

      const p = range.clientWidth / 100;
      let before = left;
      let after = width;

      // before
      if (currentElm === btnBefore) {
        before = left + (x - starPosition) / p;
        if (before < 0) before = 0;
        if (before > left + width) before = left + width;

        after = width - before + left;
      }
      // after
      else {
        after = width + (x - starPosition) / p;
        if (after < 0) after = 0;
        if (after > 100 - before) after = 100 - before;
      }

      if (before < 0) before = 0;
      if (before > 100) {
        before = 100;
        after = 0;
      }

      this.setState({
        before,
        after
      });
    });
    document.body.addEventListener("mouseup", () => {
      currentElm = null;

      const { before, after } = this.state;

      const { name, max, change } = this.props;
      if (change) {
        const p = (max || 100) / 100;

        change({
          name,
          value: {
            min: Math.round(before * p),
            max: Math.round((before + after) * p)
          }
        });
      }
    });

    const onMouseDown = e => {
      const { clientX: x, target } = e;

      currentElm = target;
      starPosition = x;

      left = Number((this.$line.current.style.left || "0").replace("%", ""));
      width = Number((this.$line.current.style.width || "0").replace("%", ""));
    };

    btnBefore.addEventListener("mousedown", onMouseDown);
    btnAfter.addEventListener("mousedown", onMouseDown);
  }

  render() {
    const { hint, max } = this.props;
    const { before, after } = this.state;

    const p = (max || 100) / 100;
    const beforeText = Math.round(before * p);
    const afterText = Math.round((before + after) * p);

    return (
      <div className="range">
        <div ref={this.$range} className="range-line">
          {/* line */}
          <div
            className="range-line__inner"
            ref={this.$line}
            style={{ left: `${before}%`, width: `${after}%` }}
          >
            <button
              ref={this.$btnBefore}
              className="range-btn range-btn__before"
            ></button>
            <button
              ref={this.$btnAfter}
              className="range-btn range-btn__after"
            ></button>
          </div>
        </div>

        <div className="range-text">
          <span>{["от", beforeText, hint || "%"].join(" ")}</span>
          <span>{["до", afterText, hint || "%"].join(" ")}</span>
        </div>

        <style jsx>{`
          .range {
            position: relative;
            padding-top: 7px;
          }

          .range-line {
            position: relative;
            margin: 0 auto 10px;
            max-width: calc(100% - 50px);
          }

          .range-line__inner {
            position: relative;
            height: 25px;
          }

          .range-line::before,
          .range-line__inner::before {
            position: absolute;
            width: 100%;
            height: 2px;
            left: 50%;
            top: 50%;
            transform: translateX(-50%);
            margin-top: -1px;
            background-color: #e0e4e8;
            border-radius: 4px;
            content: "";0
          }
          .range-line::before {
            width: calc(100% + 50px);
          }
          .range-line__inner::before {
            background-color: var(--color);
          }

          .range-btn {
            position: absolute;
            width: 25px;
            height: 25px;
            border: none;
            background-color: var(--color);
            border-radius: 100%;
          }
          .range-btn__before {
            left: 0;
            margin-left: -25px;
          }
          .range-btn__after {
            left: 100%;
          }

          .range-text {
            display: flex;
            justify-content: space-between;
            color: var(--color);
            font-size: 15px;
          }
          .range-text span {
            white-space: nowrap;
          }
        `}</style>
      </div>
    );
  }
}

export default Range;
