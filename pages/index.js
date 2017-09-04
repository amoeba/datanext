import Link from "next/link";
import React from "react";
import Header from "../components/header";
import Controls from "../components/controls";
import SearchResults from "../components/searchResults";

export default class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: props.n,
      docs: []
    };
  }

  doQuery() {
    fetch(
      "https://cn.dataone.org/cn/v2/query/solr/?q=" +
        this.props.query +
        "+AND+formatType:METADATA&rows=" +
        this.state.n +
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
  }

  onKeyUp = data => {
    console.log("changeN", data.target.value);
    this.setState({ n: data.target.value });

    fetch(
      "https://cn.dataone.org/cn/v2/query/solr/?q=" +
        this.props.query +
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
        <Controls onKeyUp={this.onKeyUp} />
        <SearchResults docs={this.state.docs} />
      </div>
    );
  }
}
