import Link from "next/link";
import React from "react";
import Header from "../components/header";
import Controls from "../components/controls";
import SearchResults from "../components/searchResults";

export default class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "arctic*",
      n: 5,
      docs: []
    };
  }

  componentDidMount() {
    fetch(
      "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=" +
        this.state.query +
        "+AND+formatType:METADATA&rows=" +
        this.state.n +
        "&fl=id,title,abstract&wt=json"
    )
      .then(req => {
        return req.json();
      })
      .then(data => {
        this.setState({
          docs: data.response.docs
        });
      });
  }

  doQuery() {
    fetch(
      "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=" +
        this.state.query +
        "+AND+formatType:METADATA&rows=" +
        this.state.n +
        "&fl=id,title,abstract&wt=json"
    )
      .then(req => {
        return req.json();
      })
      .then(data => {
        this.setState({
          docs: data.response.docs
        });
      });
  }

  changeQuery = data => {
    this.setState({ query: data.target.value });

    fetch(
      "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=" +
        this.state.query +
        "+AND+formatType:METADATA&rows=" +
        data.target.value +
        "&fl=id,title,abstract&wt=json"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          docs: data.response.docs
        });
      });
  };

  changeN = data => {
    this.setState({ n: data.target.value });

    fetch(
      "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=" +
        this.state.query +
        "+AND+formatType:METADATA&rows=" +
        data.target.value +
        "&fl=id,title,abstract&wt=json"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          docs: data.response.docs
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.n}</p>
        <Controls
          query={this.state.query}
          n={this.state.n}
          changeQuery={this.changeQuery}
          changeN={this.changeN}
        />
        <SearchResults docs={this.state.docs} />
      </div>
    );
  }
}
