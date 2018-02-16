import React from "react";
import Link from "next/link";
import Head from 'next/head'
import "isomorphic-fetch";
import Header from "../components/header";
var parseString = require('xml2js').parseString;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      object: null,
      title: "...",
      author: "...",
      date: "...",
      publisher: "...",
      abstract: "..."
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
        parseString(data, (err, result) => {
          const dataset = result["eml:eml"].dataset[0];
          this.setState({
            object: JSON.stringify(result),
            isLoading: false,
            title: dataset.title[0],
            date: dataset.pubDate[0],
            abstract: dataset.abstract[0].para[0]
          })
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
        <h2>{this.state.title} (PID: {this.props.url.query.id})</h2>
        <p>pubDate: {this.state.date}</p>
        <p>Abstract: {this.state.abstract}</p>
        <p>{loading}</p>
        
        <h3>Raw JSON (for debug purposes)</h3>
        <textarea>{this.state.object}</textarea>
      </div>
    );
  }
}
