import React from "react";
import Link from "next/link";
import "isomorphic-fetch";
import Header from "../components/header";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      object: {
        title: "Loading..."
      }
    };
  }

  async componentDidMount() {
    const query_url =
      'https://cn.dataone.org/cn/v2/query/solr/?q=id:"' +
      this.props.url.query.id +
      '"&rows=1&wt=json';
    const res = await fetch(query_url);
    const json = await res.json();
    this.setState({
      object: json.response.docs[0]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h2>{this.state.object.title}</h2>
        <p>{this.state.object.abstract}</p>
      </div>
    );
  }
}
