import React from "react";

function Select(props) {
  const { what, handler, label, after, children, ...rest } = props;

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
export default Select;
