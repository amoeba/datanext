import React from "react";

export default class Controls extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onBlur={this.props.onKeyUp} />
      </div>
    );
  }
}
