import React from "react";
import _ from "lodash"

import Input from "./Input";
import Select from "./Select";
import SearchResults from "../components/searchResults";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        queryTitle: '*',   // Default query param
        query: '*arctic*',  // Default query param
        n: 25,             // Default query param
      },
      docs: [],
      numFound: 0,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.getResults()
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.params, this.state.params)) {
      this.getResults();
    }
  }

  getResults() {
    const url = process.env.api_base + "query/solr/?q=" +
      this.state.params.query +
      "+AND+title:" + this.state.params.queryTitle + "+AND+formatType:METADATA+AND+formatId:eml*&rows=" +
      this.state.params.n +
      "&fl=id,title,origin,pubDate,datasource,resourceMap&wt=json";

    fetch(url)
      .then(req => {
        return req.json();
      })
      .then(data => {
        this.setState({
          docs: (data && data.response && data.response.docs) ? data.response.docs : [],
          numFound: data.response.numFound,
          isLoaded: true
        });
      })
      .catch(e => console.log(e)); // TODO: Handle this
  }

  changeQueryParams = _.debounce((what, value) => {
    const nextParams = { ...this.state.params };
    nextParams[what] = value;

    this.setState({params: nextParams});
  }, process.env.debounce);

  render () {
    return (<div id="container">
      <div id="controls">
        <Input
          type="text"
          defaultValue={this.state.params.queryTitle}
          what="queryTitle"
          handler={this.changeQueryParams}
          label="Title" />
        <Input
          type="text"
          defaultValue={this.state.params.query}
          what="query"
          handler={this.changeQuery}
          label="FullText" />
        <Select
          defaultValue={this.state.params.n}
          what="n"
          handler={this.changeQueryParams}
          label="Num. Results">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
      </div>
      <SearchResults
        numFound={this.state.numFound}
        docs={this.state.docs}
        isLoaded={this.state.isLoaded} />
      <style jsx>{`
        #container {
          display: grid;
          grid-template-columns: 225px auto;
          grid-column-gap: 0.5rem;
        }

        #controls {
          background-color: #eee;
          border: 1px solid #ccc;
          padding: 0.5rem;
        }
      `}</style>
    </div>);
  }
}
