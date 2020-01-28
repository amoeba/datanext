import React from "react";

export default class Select extends React.Component {
  render() {
    const { what, handler, label, after, children, ...rest } = this.props;

    return (
      <div>
        <label>{label}</label>
        <select
          {...rest}
          onChange={e => {
            handler(what, e.target.value);
          }}
        >
          {children}
        </select>
        {after}
        <style jsx>{`
          div {
            margin-bottom: 0.5rem;
          }

          select {
            font-size: 100%;
          }

          label {
            display: inline-block;
            margin-right: 0.5rem;
            margin-bottom: 0.25rem;
          }
        `}</style>
      </div>
    );
  }
}
