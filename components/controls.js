import React from "react";

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="controls">
        <ul>
          <li>
            <label htmlFor="query">Search:</label>
            <input ref="query" id="query" type="text" onChange={ () => this.props.changeQuery(this.refs.query.value) } />
          </li>
          <li>
            <label htmlFor="rows">Results:</label>
            <input ref="rows" id="rows" type="range" min="0" max="100" step="1" onChange={ () => this.props.changeN(this.refs.rows.value) } /> {this.props.n}
          </li>
        </ul>
      </div>
    );
  }
}
