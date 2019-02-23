import React from "react";
import _ from "lodash"

import Controls from "../components/controls";
import SearchResults from "../components/searchResults";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "*arctic*", // Default query param
      n: 20,             // Default query param
      docs: [],
      isLoading: false
    };

    this.changeQuery = _.debounce(this.changeQuery, 500);
    this.changeN = _.debounce(this.changeN, 500);
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getResults()
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: Refactor so this scales as I add form inputs
    if (prevState.query != this.state.query || 
        prevState.n != this.state.n) {
      this.getResults()
    }
  }

  getResults() {
    this.setState({
      docs: Array(Number(this.state.n)).fill()
    })

    const url = process.env.api_base + "query/solr/?q=" +
      this.state.query +
      "+AND+formatType:METADATA+AND+formatId:eml*&rows=" +
      this.state.n +
      "&fl=id,title,datasource,resourceMap&wt=json";

    fetch(url)
      .then(req => {
        return req.json();
      })
      .then(data => {
        this.setState({
          docs: data.response.docs,
          isLoading: false
        });
      })
      .catch(e => console.log(e));
  }

  changeQuery = value => {
    this.setState({
      query: value,
      isLoading: true
    });
  };

  changeN = value => {
    this.setState({
      n: value,
      isLoading: true
    });
  };

  render () {
    let loading = null

    // TODO: Use HOC to encapsulte this logic
    if (this.state.isLoading) {
      loading = <span>Fetching {this.state.n} document(s)...</span>
    }


    return (<div>
      <Controls
          query={this.state.query}
          n={this.state.n}
          changeQuery={this.changeQuery}
          changeN={this.changeN}
        />
        {loading}
        <SearchResults docs={this.state.docs} />
</div>);
  }
}
