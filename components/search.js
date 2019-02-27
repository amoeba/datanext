import React from "react";
import Router from 'next/router'
import _ from "lodash"

import Controls from "./controls";
import SearchResults from "../components/searchResults";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        queryTitle: '*',
        query: '*arctic*',
        n: 25,
        datasource: null
      },
      docs: this.props.docs || [],
      numFound: this.props.numFound || 0,
      isLoaded: this.props.docs || false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.params, this.state.params)) {
      this.updateResults();
    }
  }

  async getResults() {
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

    if (this.state.params.datasource) {
      url += '+AND+datasource:("' + this.state.params.datasource.join('" OR "') + '")';
    }

    url += '+AND+formatType:METADATA';
    url += '&rows=' + this.state.params.n || 25;
    url += "&fl=id,title,origin,pubDate,datasource,resourceMap";
    url += '&sort=dateUploaded+desc';
    url += '&wt=json';

    const req  = await fetch(url);
    const json = await req.json();

    return json;
  }

  async updateResults () {
    const data = await this.getResults();

    this.setState({
      docs: (data && data.response && data.response.docs) ? data.response.docs : [],
      numFound: (data && data.response) ? data.response.numFound || 0 : 0,
      isLoaded: true
    });
  }

  changeQueryParams = _.debounce((what, value) => {
    const nextParams = { ...this.state.params };
    nextParams[what] = value;

    // TODO: Factor out into a submodule
    Router.push('/?query=' + nextParams.query + '&title=' + nextParams.queryTitle + '&rows=' + nextParams.n + '&node=' + Array(nextParams.datasource).join(','));

    this.setState({params: nextParams});
  }, process.env.debounce);

  render () {
    return (<div id="container">
      <Controls
        params={this.state.params}
        changeQueryParams={this.changeQueryParams}
        appData={this.props.appData} />
      <SearchResults
        numFound={this.state.numFound}
        docs={this.state.docs}
        isLoaded={this.state.isLoaded}
        appData={this.props.appData} />
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
