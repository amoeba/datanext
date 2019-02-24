import React from "react";

export default class Controls extends React.Component {
  render() {
  
  return (
    <div id="controls">
      <label htmlFor="filterQueryTitle">Title</label>
      <input 
        id="filterQueryTitle" 
        type="text" 
        defaultValue={this.props.params.queryTitle} 
        onChange={e => { 
          this.props.changeQueryParams("queryTitle", e.target.value);
        }
      } />

      <label htmlFor="filterQuery">Full Text</label>
      <input id="filterQuery"
        type="text"
        defaultValue={this.props.params.query}
        onChange={e => { 
          this.props.changeQueryParams("query", e.target.value);
        }
      } />

      <label htmlFor="filterN">Num. Results</label>
      <select
        id="filterN" 
        defaultValue={this.props.params.n}
        onChange={e => { 
        this.props.changeQueryParams("n", e.target.value);
      }}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <style jsx>{`
        label {
          display: block;
          width: 100%;
        }
        label,
        input {
          padding: 0.25rem;
        }

        input {
          font-size: 100%;
        }
      `}</style>
    </div>);
  }
}
