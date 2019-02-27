import React from "react";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Search from "../components/search";

import "../style.scss"

export default class extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query, typeof query, Object.keys(query), query.query);
    
    let url = process.env.api_base + 'query/solr/?q=';

    // TODO: Extract into submodule
    url += query.query || '*';
    url += query.title ? '+AND+title:' + query.title : '';
    url += query.datasource ? '+AND+datasource("' + query.datasource.join('" OR "') + '")' : ''; // TODO: Needs its own submodule, incld urlencoding
    url += '+AND+formatType:METADATA';
    url += '&rows=' + (query.rows || 25);
    url += "&fl=id,title,origin,pubDate,datasource,resourceMap";
    url += '&sort=dateUploaded+desc';
    url += '&wt=json';

    const request  = await fetch(url);
    const json = await request.json();

    // TODO: Return safe response on failure
    return {
      docs: json.response.docs,
      numFound: json.response.numFound
    }
  }

  render() {
    return (
      <div>
        <CustomHead>
          <title>Search</title>
        </CustomHead>
        <Header />
        <Search
          appData={this.props.appData}
          docs={this.props.docs}
          numFound={this.props.numFound} />
      </div>
    );
  }
}
