import React from "react";
import _ from "lodash"

import Input from "./Input";
import SearchResults from "../components/searchResults";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        queryTitle: '*',   // Default query param
        query: '*arctic*',  // Default query param
        n: 20,             // Default query param
      },
      docs: [],
      numFound: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.getResults()
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: Rewrite this so it scales as I add more stuff
    if (!_.isEqual(prevState.params, this.state.params)) {
      this.getResults();
    }
  }

  getResults() {
    const url = process.env.api_base + "query/solr/?q=" +
      this.state.params.query +
      "+AND+title:" + this.state.params.queryTitle + "+AND+formatType:METADATA+AND+formatId:eml*&rows=" +
      this.state.params.n +
      "&fl=id,title,datasource,resourceMap&wt=json";

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
    let loading = null

    // TODO: Use HOC to encapsulte this logic
    if (!this.state.isLoaded) {
      loading = <span>Fetching {this.state.n} document(s)...</span>
    }

    return (<div>
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
        <Input
          type="range"
          min="1"
          max="25"
          defaultValue={this.state.params.n}
          what="n"
          handler={this.changeQueryParams}
          label="Num. Results" 
          after={this.state.n} />
      </div>
      {loading}
      <SearchResults numFound={this.state.numFound} docs={this.state.docs} />
      <style jsx>{`
        #controls {
          background-color: #eee;
          border: 1px solid #ccc;
          padding: 0.5rem;
          margin: 0.5rem;
        }
      `}</style>
    </div>);
  }
}
