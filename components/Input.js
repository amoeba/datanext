import React from "react";

export default class Input extends React.Component {
  render() {
    const {what, handler, label, after, ...rest} = this.props;

    return (
      <div>
        <label>{label}</label>
        <input {...rest} 
          onChange={(e)=>{
            handler(what, e.target.value);
        }} />
        {after}
        <style jsx>{`
          div {
            margin-bottom: 0.5rem;
          }

          input {
            font-size: 100%;
            width: 100%;
          }

          input[type=text] {
            box-sizing: border-box;
          }

          label {
            display: inline-block;
            margin-bottom: 0.25rem;
          }
        `}</style>
      </div>
    );
  }
}