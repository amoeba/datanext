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
            <label htmlFor="query">Query</label>
            <input ref="query" id="query" type="text" onChange={ () => this.props.changeQuery(this.refs.query.value) } />
          </li>
          <li>
            <label htmlFor="rows">Num. Results</label>
            <input ref="rows" id="rows" type="range" min="0" max="100" step="1" onChange={ () => this.props.changeN(this.refs.rows.value) } /> {this.props.n}
          </li>
        </ul>
        <style jsx>{`
          #controls {
            background-color: #eee;
            border: 1px solid #ccc;
            padding: 0.5rem;
            margin: 0.5rem;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          input {
            font-size: 100%;
          }

          label {
            margin-right: 0.5rem;
          }
        `}</style>
      </div>
    );
  }
}
