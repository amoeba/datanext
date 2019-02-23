import React from "react";
import Head from 'next/head'
import "isomorphic-fetch";
import urlencode from "urlencode";

import Header from "../components/header";
import Metadata from "../components/metadata";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      html: null
    };
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
        <Metadata id={urlencode.decode(this.props.url.query.id)} />
      </div>
    );
  }
}
