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
    </div>
  );
}
export default Select;
