import React from "react";

export default class Metadata extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.html}}>
      </div>
    );
  }
}
