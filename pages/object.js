import React from "react";
import Link from "next/link";
import "isomorphic-fetch";
import Header from "../components/header";
import convert from "xml-js"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      object: null
    };
  }

  componentDidMount() {
    const object_url =
      'https://cn-stage.test.dataone.org/cn/v2/object/' + this.props.url.query.id;
    
    this.setState({
      isLoading: true
    })

    fetch(object_url)
      .then(req => {
        return req.text()
      })
      .then(data => {
        this.setState({
          object: convert.xml2json(data, { compact: true, spaces: 4 }),
          isLoading: false
        });
      });
  }

  render() {
    let loading = null

    if (this.state.isLoading) {
      loading = <span>Loading...</span>
    }

    return (
      <div>
        <Header />
        <h2>{this.props.url.query.id}</h2>
        <p>{loading}</p>
        <pre>{this.state.object}</pre>
      </div>
    );
  }
}
