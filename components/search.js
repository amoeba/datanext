import React from "react";
import Router from "next/router";
import _ from "lodash";

import Controls from "./controls";
import SearchResults from "./SearchResults";
import TokenContext from "../shared/TokenContext";

class Search extends React.Component {
  static contextType = TokenContext;

  constructor(props) {
    super(props);

    this.state = {
      params: {
        queryTitle: "*",
        query: "",
        n: 25,
        datasource: null
      },
      docs: this.props.docs || [],
      numFound: this.props.numFound || 0,
      isLoaded: this.props.docs || false
    };
  }

  async getResults() {
    // TODO: Factor this out and make it better at producing valid queries
    let url = process.env.api_base + "query/solr/?q=";

    if (this.state.params.query) {
      url += this.state.params.query;
    }

    if (this.state.params.queryTitle) {
      // And with the query only if needed
      if (this.state.params.query) {
        url += "+AND+";
      }

      url += "title:" + this.state.params.queryTitle;
    }

    if (this.state && this.state.params && this.state.params.datasource) {
      if (
        this.state.params.datasource.length == 1 &&
        this.state.params.datasource[0] !== "All Nodes"
      ) {
        url += '+AND+datasource:"' + this.state.params.datasource[0] + '"';
      } else if (this.state.params.datasource.length > 1) {
        url +=
          '+AND+datasource:("' +
          this.state.params.datasource.join('" OR "') +
          '")';
      }
    }

    url += "+AND+formatType:METADATA";
    url += "&rows=" + this.state.params.n || 25;
    url += "&fl=id,title,origin,pubDate,datasource,resourceMap,isPublic";
    url += "&sort=dateUploaded+desc";
    url += "&wt=json";

    const options = this.context.token
      ? {
          headers: {
            Authorization: "Bearer " + this.context.token
          }
        }
      : null;

    const req = await fetch(url, options);
    const json = await req.json();

    return json;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.params, this.state.params)) {
      this.updateResults();
    }
  }

  async updateResults() {
    const data = await this.getResults();

    this.setState({
      docs:
        data && data.response && data.response.docs ? data.response.docs : [],
      numFound: data && data.response ? data.response.numFound || 0 : 0,
      isLoaded: true
    });
  }

  changeQueryParams = _.debounce((what, value) => {
    const nextParams = { ...this.state.params };
    nextParams[what] = value;

    // TODO: Factor out into a submodule
    Router.push(
      "/?query=" +
        nextParams.query +
        "&title=" +
        nextParams.queryTitle +
        "&rows=" +
        nextParams.n +
        "&node=" +
        Array(nextParams.datasource).join(",")
    );

    this.setState({
      params: nextParams,
      isLoaded: false
    });
  }, process.env.debounce || 1000);

  render() {
    return (
      <div id="container">
        <Controls
          params={this.state.params}
          changeQueryParams={this.changeQueryParams}
        />
        <SearchResults
          n={this.state.params.n}
          numFound={this.state.numFound}
          docs={this.state.docs}
          isLoaded={this.state.isLoaded}
        />
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
      </div>
    );
  }
}

export default Search;
