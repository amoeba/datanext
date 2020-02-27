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
    <div>
      <div className="mb-4">
        <label className="text-sm">
          <span className="hidden md:block">Full Text</span>
          <input
            className="min-w-full block border border-black-500 p-1 rounded-sm"
            type="text"
            defaultValue={props.params.query}
            placeholder="Enter search terms"
            onChange={e => {
              props.changeQueryParams("query", e.target.value);
            }}
          />
        </label>
      </div>

      <div className="hidden md:block">
        <div className="mb-4 text-sm">
          <label>
            Title
            <input
              className="min-w-full block border border-black-500 p-1 rounded-sm"
              type="text"
              defaultValue={props.params.queryTitle}
              onChange={e => {
                props.changeQueryParams("queryTitle", e.target.value);
              }}
            />
          </label>
        </div>

        <div className="mb-4 text-sm">
          <label htmlFor="filterN">
            Num. Results
            <select
              className="min-w-full block border border-black-500 p-1 rounded-sm"
              defaultValue={props.params.n}
              onChange={e => {
                props.changeQueryParams("n", e.target.value);
              }}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>

        <div className="mb-4 text-sm">
          <label htmlFor="filterNode">
            Node
            <select
              className="min-w-full block border border-black-500 p-1 rounded-sm"
              multiple={true}
              size="10"
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
          </label>
        </div>
      </div>
    </div>
  );
}

export default Controls;
