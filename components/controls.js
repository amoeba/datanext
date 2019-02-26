import React from "react";

export default class Controls extends React.Component {
  render() {
    const nodes = this.props.appData.nodes.map(n => {
      return (<option key={n.id} value={n.id}>{n.name}</option>);
    });

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

      <label htmlFor="filterNode">Node</label>
      <select
        multiple={true}
        size="10"
        id="filterNode"
        onChange={e => {
          let values = [];

          _.forEach(e.target.options, o => {
            if (o.selected) {
              values.push(o.value);
            }
          });

          this.props.changeQueryParams("datasource", values);
        }}>
          <option>All Nodes</option>
          { nodes }
      </select>
      <style jsx>{`
        label {
          display: block;
        }
        label,
        input {
          box-sizing: border-box;
          padding: 0.25rem;
          width: 100%;
        }

        input, 
        select {
          font-size: 100%;
        }

        select {
          max-width: 100%;
        }
      `}</style>
    </div>);
  }
}
