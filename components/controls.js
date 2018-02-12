import React from "react";

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="controls">
        <label htmlFor="query">Search:</label>
        <input
          ref="query"
          id="query"
          type="text"
          onChange={ () => this.props.changeQuery(this.refs.query.value) } />
        <label htmlFor="rows"># Results:</label>
        <input ref="rows" id="rows" type="text" onChange={ () => this.props.changeN(this.refs.rows.value) } />
      </div>
    );
  }
}
