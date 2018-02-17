import React from "react";
import _ from "lodash"
import Head from 'next/head'
import Header from "../components/header";
import Controls from "../components/controls";
import SearchResults from "../components/searchResults";
import "../static/style.css"

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "*arctic*", // Default query param
      n: 5,              // Default query param
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
      docs: Array(this.state.n).fill()
    })

    const url = "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=" +
      this.state.query +
      "+AND+formatType:METADATA&rows=" +
      this.state.n +
      "&fl=id,title,datasource&&wt=json";

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

  render() {
    let loading = null

    if (this.state.isLoading) {
      loading = <span>Loading...</span>
    }

    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script type="application/ld+json">
            {`{
              "@context": {
                "@vocab": "http://schema.org/"
              },
              "@type": "DataCatalog",
              "name": "Test DataCatalog name",
              "description": "Test DataCatalog description"
            }`}
          </script>
        </Head>
        <Header />
        <Controls
          query={this.state.query}
          n={this.state.n}
          changeQuery={this.changeQuery}
          changeN={this.changeN}
        />
        {loading}
        <SearchResults docs={this.state.docs} />
      </div>
    );
  }
}
