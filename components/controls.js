import nodeList from "../shared/nodeList";

function Controls(props) {
  const nodes = nodeList.map(n => {
    return (
      <option key={n.identifier} value={n.identifier}>
        {n.name}
      </option>
    );
  });

  return (
    <div id="controls">
      <label className="more" htmlFor="filterQuery">
        Full Text
      </label>
      <input
        id="filterQuery"
        type="text"
        defaultValue={props.params.query}
        placeholder="Enter search terms"
        onChange={e => {
          props.changeQueryParams("query", e.target.value);
        }}
      />

      <div className="more">
        <label htmlFor="filterQueryTitle">Title</label>
        <input
          id="filterQueryTitle"
          type="text"
          defaultValue={props.params.queryTitle}
          onChange={e => {
            props.changeQueryParams("queryTitle", e.target.value);
          }}
        />

        <label htmlFor="filterN">Num. Results</label>
        <select
          id="filterN"
          defaultValue={props.params.n}
          onChange={e => {
            props.changeQueryParams("n", e.target.value);
          }}
        >
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

            props.changeQueryParams("datasource", values);
          }}
        >
          <option>All Nodes</option>
          {nodes}
        </select>
      </div>
      <style jsx>{`
        #controls {
          margin-bottom: 1.5rem;
        }
        input,
        select {
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        .more {
          display: none;
        }

        @media (min-width: 480px) {
          #controls {
            border-right: 1px solid #ccc;
            padding-right: 0.5rem;
          }

          .more {
            display: block;
          }
        }

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
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Controls;
