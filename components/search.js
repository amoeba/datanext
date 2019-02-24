import React from "react";
import _ from "lodash"

import Input from "./Input";
import Select from "./Select";
import Controls from "./controls";
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
    // TODO: Factor this out and make it better at producing valid queries
    let url = process.env.api_base + 'query/solr/?q=';
    
    if (this.state.params.query) {
      url += this.state.params.query;
    }

    if (this.state.params.queryTitle) {
      // And with the query only if needed
      if (this.state.params.query) {
        url += '+AND+'
      }

      url += 'title:' + this.state.params.queryTitle;
    }

    
    url += '+AND+formatType:METADATA';
    url += '&rows=' + this.state.params.n || 25;
    url += "&fl=id,title,origin,pubDate,datasource,resourceMap";
    url += '&sort=dateUploaded+desc';
    url += '&wt=json';

    console.log(url)
    fetch(url)
      .then(req => {
        return req.json();
      })
      .then(data => {
        this.setState({
          docs: (data && data.response && data.response.docs) ? data.response.docs : [],
          numFound: (data && data.response) ? data.response.numFound || 0 : 0,
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
      <Controls params={this.state.params} changeQueryParams={this.changeQueryParams} />
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
