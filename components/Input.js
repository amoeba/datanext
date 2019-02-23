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
          input {
            font-size: 100%;
          }

          label {
            display: inline-block;
            width: 10rem;
          }
        `}</style>
      </div>
    );
  }
}
