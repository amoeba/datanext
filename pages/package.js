import React from "react";
import "isomorphic-fetch";
import urlencode from "urlencode";

import Header from "../components/header";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: false,
      data: null
    };
  }

  componentDidMount() {
    const url = "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=" +
      "resourceMap:\"" + urlencode.decode(this.props.url.query.package) + "\"" +
      "&rows=1&fl=id,fileName,formatType,formatId,size&wt=json";

    this.setState({
      isLoading: true
    })

    fetch(url)
      .then(req => {
        return req.json()
      })
      .then(json => {
        this.setState({
          data: json
        })
      });
  }

  render() {
    return (
      <div>
        <Header />
        <PackageTable data={this.state.data} />
        <Metadata id={urlencode.decode(this.props.url.query.metadata)} />
      </div>
    );
  }
}
