import React from "react";
import Link from "next/link";
import Head from 'next/head'
import "isomorphic-fetch";
import Header from "../components/header";
var parseString = require('xml2js').parseString;
import Metadata from "../components/metadata";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      html: null
    };
  }

  componentDidMount() {
    const object_url =
      'https://cn-stage.test.dataone.org/cn/v2/views/metacatui/' + this.props.url.query.id;
    
    this.setState({
      isLoading: true
    })

    fetch(object_url)
      .then(req => {
        return req.text()
      })
      .then(data => {
        this.setState({
          html: data
        })
      });
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="citation_title" content={this.state.title} />
          <meta name="citation_author" content={this.state.author} />
          <meta name="citation_date" content={this.state.date} />
          <meta name="citation_publisher" content={this.state.publisher} />
          <script type="application/ld+json">
            {`{
              "@context": {
                "@vocab": "http://schema.org/"
              },
              "@type": "Dataset",
              "name": "Test Dataset name",
              "description": "Test Dataset description"
            }`}
          </script>
        </Head>
        <Header />
        <Metadata html={this.state.html} />
      </div>
    );
  }
}
