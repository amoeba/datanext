import React from "react";

export default class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query,
      n: props.n
    };
  }
  render() {
    return (
      <div>
        <label>Query:</label>
        <input
          type="text"
          onChange={this.props.changeQuery}
          value={this.props.query}
        />
        <label># docs:</label>
        <input type="text" onChange={this.props.changeN} value={this.props.n} />
      </div>
    );
  }
}
